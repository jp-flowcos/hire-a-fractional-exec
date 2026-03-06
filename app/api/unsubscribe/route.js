import { NextResponse } from "next/server";
import { unsubscribe } from "@/libs/api/subscribers";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribe</title>
</head>
<body style="font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f5f5f5;">
  <div style="text-align: center; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); max-width: 400px;">
    <h1 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Invalid Request</h1>
    <p style="color: #666;">No email address was provided.</p>
  </div>
</body>
</html>`,
      {
        status: 400,
        headers: { "Content-Type": "text/html" },
      }
    );
  }

  try {
    await unsubscribe(email.toLowerCase().trim());

    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribed</title>
</head>
<body style="font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f5f5f5;">
  <div style="text-align: center; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); max-width: 400px;">
    <h1 style="font-size: 1.25rem; margin-bottom: 0.5rem;">You've Been Unsubscribed</h1>
    <p style="color: #666;">You will no longer receive emails from HireAFractionalExec.</p>
    <p style="color: #999; font-size: 0.875rem; margin-top: 1rem;">If this was a mistake, you can re-subscribe at any time from our website.</p>
    <a href="/" style="display: inline-block; margin-top: 1rem; color: #6366f1; text-decoration: none;">Back to homepage</a>
  </div>
</body>
</html>`,
      {
        status: 200,
        headers: { "Content-Type": "text/html" },
      }
    );
  } catch (error) {
    console.error("Unsubscribe error:", error);

    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error</title>
</head>
<body style="font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f5f5f5;">
  <div style="text-align: center; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); max-width: 400px;">
    <h1 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Something Went Wrong</h1>
    <p style="color: #666;">We couldn't process your unsubscribe request. Please try again or contact support.</p>
    <a href="/" style="display: inline-block; margin-top: 1rem; color: #6366f1; text-decoration: none;">Back to homepage</a>
  </div>
</body>
</html>`,
      {
        status: 500,
        headers: { "Content-Type": "text/html" },
      }
    );
  }
}
