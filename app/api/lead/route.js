import { NextResponse } from "next/server";
import { createSubscriber } from "@/libs/api/subscribers";

// Repurposed from ShipFast's lead capture to handle email subscriptions
export async function POST(req) {
  const body = await req.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    await createSubscriber({
      email: body.email,
      name: body.name,
      subscriber_type: "job_seeker",
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
