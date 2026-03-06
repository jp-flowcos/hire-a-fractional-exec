import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = getSEOTags({
  title: "Job Posted Successfully | HireAFractionalExec",
  description: "Your job listing has been submitted for review.",
  canonicalUrlRelative: "/post-a-job/success",
});

export default function PostJobSuccessPage() {
  return (
    <>
      <Header />

      <main className="py-24 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-success text-5xl mb-6">&#10003;</div>
          <h1 className="text-3xl font-extrabold text-base-content mb-4">
            Your Job Has Been Submitted
          </h1>
          <p className="text-lg text-base-content/60 mb-8">
            Our team will review your listing within 24 hours. You&apos;ll
            receive an email confirmation once it&apos;s live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/jobs" className="btn btn-primary">
              Browse Jobs
            </Link>
            <Link href="/" className="btn btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
