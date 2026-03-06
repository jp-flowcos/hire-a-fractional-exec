import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import configFile from "@/config";
import { findCheckoutSession } from "@/libs/stripe";
import { updateJob } from "@/libs/api/jobs";
import { sendEmail } from "@/libs/resend";

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  if (!stripe || !webhookSecret) {
    console.error("Stripe is not configured. Missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET");
    return NextResponse.json({ error: "Stripe configuration missing" }, { status: 500 });
  }

  const body = await req.text();
  const signature = (await headers()).get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed. ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  const data = event.data;
  const eventType = event.type;

  try {
    switch (eventType) {
      case "checkout.session.completed": {
        const session = await findCheckoutSession(data.object.id);
        const priceId = session?.line_items?.data[0]?.price.id;
        const jobId = data.object.client_reference_id;
        const plan = configFile.stripe.plans.find((p) => p.priceId === priceId);

        if (!plan || !jobId) break;

        const isFeatured = plan.name === "Featured";
        const now = new Date();
        const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

        await updateJob(jobId, {
          is_approved: false, // still needs admin approval
          is_featured: isFeatured,
          stripe_payment_id: data.object.id,
          posted_at: now.toISOString(),
          expires_at: expiresAt.toISOString(),
        });

        // Send confirmation email to the job poster
        const customerEmail = data.object.customer_details?.email;
        if (customerEmail) {
          try {
            await sendEmail({
              to: customerEmail,
              subject: "Your job posting has been submitted",
              html: `<p>Thanks for posting on HireAFractionalExec!</p>
                <p>Your <strong>${plan.name}</strong> listing has been submitted and will be reviewed by our team within 24 hours.</p>
                <p>You'll receive another email once it's live.</p>`,
            });
          } catch (e) {
            console.error("Email send error:", e?.message);
          }
        }

        // Notify admin
        const adminEmail = process.env.ADMIN_EMAILS?.split(",")[0]?.trim();
        if (adminEmail) {
          try {
            await sendEmail({
              to: adminEmail,
              subject: `New ${plan.name} job posting submitted`,
              html: `<p>A new ${plan.name} job posting (ID: ${jobId}) needs review.</p>
                <p>Customer: ${customerEmail || "unknown"}</p>
                <p><a href="${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/admin/jobs">Review in Admin</a></p>`,
            });
          } catch (e) {
            console.error("Admin email error:", e?.message);
          }
        }

        break;
      }

      case "checkout.session.expired": {
        // User didn't complete payment — no action needed
        break;
      }

      default:
        // Unhandled event type
        break;
    }
  } catch (e) {
    console.error("stripe error: " + e.message + " | EVENT TYPE: " + eventType);
  }

  return NextResponse.json({});
}
