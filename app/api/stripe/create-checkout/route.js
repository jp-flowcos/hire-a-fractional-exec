import { NextResponse } from "next/server";
import { createCheckout } from "@/libs/stripe";

// Creates a Stripe Checkout Session for job posting payments
export async function POST(req) {
  const body = await req.json();

  if (!body.priceId) {
    return NextResponse.json(
      { error: "Price ID is required" },
      { status: 400 }
    );
  } else if (!body.successUrl || !body.cancelUrl) {
    return NextResponse.json(
      { error: "Success and cancel URLs are required" },
      { status: 400 }
    );
  } else if (!body.mode) {
    return NextResponse.json(
      { error: "Mode is required" },
      { status: 400 }
    );
  }

  try {
    const stripeSessionURL = await createCheckout({
      priceId: body.priceId,
      mode: body.mode,
      successUrl: body.successUrl,
      cancelUrl: body.cancelUrl,
      clientReferenceId: body.clientReferenceId,
    });

    return NextResponse.json({ url: stripeSessionURL });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}
