import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = getSEOTags({
  title: "About HireAFractionalExec | The Job Board for Fractional Executives",
  description:
    "HireAFractionalExec is the job board where high-growth companies find fractional C-suite leaders. Built by a fractional exec, for fractional execs.",
  canonicalUrlRelative: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="py-16 px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-base-content mb-8">
            About HireAFractionalExec
          </h1>

          <div className="prose prose-lg max-w-none text-base-content/80 space-y-6">
            <p className="text-xl leading-relaxed">
              HireAFractionalExec is the job board where high-growth companies
              find fractional C-suite leaders. Not a talent marketplace that
              takes a cut. Not a recruiter. A clean, fast job board that
              connects founders with fractional executives directly.
            </p>

            <h2 className="text-2xl font-bold text-base-content mt-10">
              Why This Exists
            </h2>
            <p>
              The fractional executive market is booming, but hiring one is
              still harder than it should be. Founders post on LinkedIn and
              hope for the best. Recruiters charge 20-30% fees for
              introductions. Talent marketplaces take a cut of every engagement.
            </p>
            <p>
              We built HireAFractionalExec to fix that. Post a role for a flat
              fee. No commissions, no middlemen, no percentage of the
              engagement. Just direct connections between companies and
              fractional leaders.
            </p>

            <h2 className="text-2xl font-bold text-base-content mt-10">
              Built by a Fractional Exec
            </h2>
            <p>
              This isn&apos;t a job board built by people who&apos;ve never
              hired or been a fractional executive. It&apos;s built by someone
              who lives in this world every day &mdash; who knows what
              founders need and what fractional leaders look for.
            </p>

            <h2 className="text-2xl font-bold text-base-content mt-10">
              What We Believe
            </h2>
            <ul className="space-y-3">
              <li>
                <strong>Transparency wins.</strong> Salary ranges should be
                visible. Pricing should be simple. No hidden fees.
              </li>
              <li>
                <strong>Direct is better.</strong> Companies and fractional
                execs should connect without a middleman taking a cut.
              </li>
              <li>
                <strong>Niche beats broad.</strong> A job board focused
                exclusively on fractional executive roles serves everyone
                better than a general-purpose board.
              </li>
              <li>
                <strong>Quality over quantity.</strong> Every listing is
                reviewed before it goes live. No spam, no irrelevant posts.
              </li>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/jobs" className="btn btn-primary">
                Browse Jobs
              </Link>
              <Link href="/post-a-job" className="btn btn-secondary">
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
