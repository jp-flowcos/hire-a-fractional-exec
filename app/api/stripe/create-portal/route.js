import { NextResponse } from "next/server";
import { createCustomerPortal } from "@/libs/stripe";

// Customer portal is not used for the job board (one-time payments only)
// Keeping the route for potential future use
export async function POST(req) {
  return NextResponse.json(
    { error: "Customer portal is not available for one-time payments" },
    { status: 400 }
  );
}
