import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import {
  getFeaturedJobs,
  getRecentJobs,
  getJobCountsByRoleType,
} from "@/libs/api/jobs";
import { formatRoleType, roleTypeToSlug } from "@/libs/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import CategoryCard from "@/components/CategoryCard";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import FAQ from "@/components/FAQ";

export const metadata = getSEOTags({
  title: "The #1 Job Board for Fractional Executives | HireAFractionalExec",
  description:
    "Find fractional COO, CMO, CFO, CTO, and Chief of Staff roles. The leading job board connecting fractional executives with companies that need part-time C-suite leadership.",
  keywords: [
    "fractional executive jobs",
    "fractional COO",
    "fractional CMO",
    "fractional CFO",
    "fractional CTO",
    "part-time executive",
    "fractional C-suite",
  ],
  canonicalUrlRelative: "/",
});

const homepageFAQs = [
  {
    question: "What is a fractional executive?",
    answer:
      "A fractional executive is an experienced C-suite leader who works part-time with one or more companies. They provide senior strategic leadership — typically 10-20 hours per week — at a fraction of the cost of a full-time executive hire.",
  },
  {
    question: "Who hires fractional executives?",
    answer:
      "Startups, growth-stage companies, and SMBs that need senior leadership but aren't ready for (or can't afford) a full-time C-suite hire. Companies typically between $500K and $20M in revenue benefit the most.",
  },
  {
    question: "How much do fractional executives cost?",
    answer:
      "Most fractional executives charge $3,000-$15,000 per month depending on the role, scope, and hours. This is typically 20-40% of what a full-time executive would cost in total compensation.",
  },
  {
    question: "How do I post a job on HireAFractionalExec?",
    answer:
      "Click the 'Post a Job' button, fill out the listing details, and choose a plan. Standard listings are $299 for 30 days. Featured listings at $499 get homepage placement and inclusion in our weekly digest email.",
  },
  {
    question: "What types of fractional roles are listed?",
    answer:
      "We list fractional COO, CMO, CFO, CTO, CRO, Chief of Staff, and Head of Ops/Finance/Marketing/Engineering roles. Both remote and on-site positions are available.",
  },
  {
    question: "How is this different from other job boards?",
    answer:
      "HireAFractionalExec is the only job board focused exclusively on fractional and part-time executive roles. Every listing is for a senior leadership position — no junior roles, no full-time-only postings.",
  },
];

const categoryPills = [
  { label: "COO", href: "/fractional-coo-jobs" },
  { label: "CMO", href: "/fractional-cmo-jobs" },
  { label: "CFO", href: "/fractional-cfo-jobs" },
  { label: "CTO", href: "/fractional-cto-jobs" },
  { label: "CRO", href: "/fractional-cro-jobs" },
  { label: "CoS", href: "/fractional-cos-jobs" },
  { label: "Head of Ops", href: "/head-of-ops-jobs" },
];

export default async function HomePage() {
  let featuredJobs = [];
  let recentJobs = [];
  let jobCounts = {};

  try {
    featuredJobs = await getFeaturedJobs(6);
    if (!featuredJobs || featuredJobs.length === 0) {
      recentJobs = await getRecentJobs(6);
    }
  } catch {
    // Silently handle — page still renders
  }

  try {
    jobCounts = await getJobCountsByRoleType();
  } catch {
    // Silently handle
  }

  const displayJobs = featuredJobs.length > 0 ? featuredJobs : recentJobs;
  const jobsSectionTitle =
    featuredJobs.length > 0 ? "Featured Jobs" : "Recent Jobs";

  const categoryEntries = Object.entries(jobCounts);
  const totalJobs = Object.values(jobCounts).reduce((a, b) => a + b, 0);

  return (
    <>
      <Header />

      <main>
        {/* Hero Section — dark bg with dot grid */}
        <section className="relative bg-base-100 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="relative max-w-5xl mx-auto px-8 py-24 md:py-32 text-center">
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-4">
              The Job Board for Fractional C-Suite
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-base-content mb-6 tracking-tight leading-tight">
              Fractional Leaders.{" "}
              <span className="text-primary">Real Roles.</span>{" "}
              No Middleman.
            </h1>
            <p className="text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Find or post fractional COO, CMO, CFO, CTO, and C-suite roles.
              No recruiters. No fees for job seekers. Direct connections only.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/jobs" className="btn btn-primary btn-lg">
                Browse Jobs
              </Link>
              <Link href="/post-a-job" className="btn btn-secondary btn-lg">
                Post a Job &mdash; $299
              </Link>
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categoryPills.map((pill) => (
                <Link
                  key={pill.href}
                  href={pill.href}
                  className="btn btn-outline btn-sm border-base-300 hover:border-primary hover:bg-primary/10 text-base-content/80"
                >
                  {pill.label}
                </Link>
              ))}
            </div>

            {/* Stats bar */}
            {totalJobs > 0 && (
              <div className="flex items-center justify-center gap-6 text-sm text-base-content/50">
                <span>{totalJobs} active role{totalJobs !== 1 ? "s" : ""}</span>
                <span className="text-base-300">&bull;</span>
                <span>100% free to browse</span>
                <span className="text-base-300">&bull;</span>
                <span>No recruiter fees</span>
              </div>
            )}
          </div>
        </section>

        {/* Featured / Recent Jobs Section */}
        {displayJobs.length > 0 && (
          <section className="py-20 px-8 bg-base-200">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-base-content">
                  {jobsSectionTitle}
                </h2>
                <Link href="/jobs" className="btn btn-ghost btn-sm text-primary">
                  View all jobs &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Grid Section */}
        {categoryEntries.length > 0 && (
          <section className="py-20 px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-base-content mb-4 text-center">
                Browse by Role
              </h2>
              <p className="text-base-content/60 text-center mb-10 max-w-2xl mx-auto">
                Explore fractional executive opportunities by role type. Each
                category has dedicated listings and salary insights.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryEntries.map(([roleType, count]) => (
                  <CategoryCard
                    key={roleType}
                    title={formatRoleType(roleType)}
                    description={`${count} open position${count !== 1 ? "s" : ""}`}
                    href={`/${roleTypeToSlug(roleType)}`}
                    jobCount={count}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Email Capture CTA Section */}
        <section className="py-20 px-8 bg-base-200">
          <div className="max-w-2xl mx-auto text-center">
            <EmailCaptureForm
              title="Get Fractional Executive Jobs in Your Inbox"
              description="Join our weekly digest. We'll send you the latest fractional COO, CMO, CFO, and CTO opportunities — no spam, unsubscribe anytime."
            />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ faqList={homepageFAQs} />
      </main>

      <Footer />
    </>
  );
}
