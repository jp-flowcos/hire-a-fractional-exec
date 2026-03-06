import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const { auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
});

export default auth(async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!req.auth) {
      return Response.redirect(new URL("/api/auth/signin", req.url));
    }

    const adminEmails = (process.env.ADMIN_EMAILS || "")
      .split(",")
      .map((e) => e.trim().toLowerCase());

    if (!adminEmails.includes(req.auth.user?.email?.toLowerCase())) {
      return Response.redirect(new URL("/", req.url));
    }
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
