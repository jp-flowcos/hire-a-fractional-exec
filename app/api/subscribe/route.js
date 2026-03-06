import { NextResponse } from "next/server";
import { createSubscriber } from "@/libs/api/subscribers";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, name, role_preferences, subscriber_type } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Validate role_preferences if provided
    if (role_preferences && !Array.isArray(role_preferences)) {
      return NextResponse.json(
        { error: "role_preferences must be an array." },
        { status: 400 }
      );
    }

    const subscriber = await createSubscriber({
      email: email.toLowerCase().trim(),
      name: name?.trim() || null,
      role_preferences: role_preferences || null,
      subscriber_type: subscriber_type || "job_seeker",
    });

    return NextResponse.json(
      { success: true, subscriber },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
