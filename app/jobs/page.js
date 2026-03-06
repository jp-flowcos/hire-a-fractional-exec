import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import { getApprovedJobs } from "@/libs/api/jobs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import JobFilters from "@/components/JobFilters";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmailCaptureForm from "@/components/EmailCaptureForm";

export async function generateMetadata() {
  return getSEOTags({
    title: "Fractional Executive Jobs | Browse All Listings | HireAFractionalExec",
    description:
      "Browse all open fractional executive positions. Filter by role type, location, and salary. Find fractional COO, CMO, CFO, CTO, and Chief of Staff opportunities.",
    keywords: [
      "fractional executive jobs",
      "fractional COO jobs",
      "fractional CMO jobs",
      "fractional CFO jobs",
      "part-time executive roles",
    ],
    canonicalUrlRelative: "/jobs",
  });
}

export default async function JobsPage({ searchParams }) {
  const params = await searchParams;
  const roleType = params?.roleType || "";
  const locationType = params?.locationType || "";
  const page = parseInt(params?.page || "1", 10);
  const limit = 20;

  let jobs = [];
  let total = 0;

  try {
    const result = await getApprovedJobs({
      roleType: roleType || undefined,
      locationType: locationType || undefined,
      page,
      limit,
    });
    jobs = result.jobs;
    total = result.total;
  } catch {
    // Silently handle — page still renders with empty state
  }

  const totalPages = Math.ceil(total / limit);

  // Build pagination URLs preserving current filters
  function buildPageUrl(targetPage) {
    const p = new URLSearchParams();
    if (roleType) p.set("roleType", roleType);
    if (locationType) p.set("locationType", locationType);
    p.set("page", String(targetPage));
    return `/jobs?${p.toString()}`;
  }

  return (
    <>
      <Header />

      <main className="py-10 px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Jobs" },
            ]}
          />

          <h1 className="text-3xl md:text-4xl font-extrabold text-base-content mt-6 mb-8">
            Fractional Executive Jobs
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="w-full lg:w-72 flex-shrink-0">
              <JobFilters />
            </aside>

            {/* Job Listings */}
            <div className="flex-1">
              {jobs.length > 0 ? (
                <>
                  <p className="text-sm text-base-content/60 mb-6">
                    Showing {(page - 1) * limit + 1}-
                    {Math.min(page * limit, total)} of {total} jobs
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {jobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-4 mt-12">
                      {page > 1 ? (
                        <Link
                          href={buildPageUrl(page - 1)}
                          className="btn btn-outline btn-sm"
                        >
                          &larr; Previous
                        </Link>
                      ) : (
                        <button className="btn btn-outline btn-sm" disabled>
                          &larr; Previous
                        </button>
                      )}

                      <span className="text-sm text-base-content/70">
                        Page {page} of {totalPages}
                      </span>

                      {page < totalPages ? (
                        <Link
                          href={buildPageUrl(page + 1)}
                          className="btn btn-outline btn-sm"
                        >
                          Next &rarr;
                        </Link>
                      ) : (
                        <button className="btn btn-outline btn-sm" disabled>
                          Next &rarr;
                        </button>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16">
                  <h2 className="text-xl font-semibold text-base-content mb-2">
                    No jobs found
                  </h2>
                  <p className="text-base-content/60 mb-6">
                    Try adjusting your filters or check back soon for new
                    listings.
                  </p>
                  <Link href="/jobs" className="btn btn-primary btn-sm">
                    Clear filters
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Email Capture */}
          <section className="mt-20">
            <div className="max-w-2xl mx-auto text-center">
              <EmailCaptureForm
                title="Never Miss a New Listing"
                description="Get new fractional executive jobs delivered to your inbox weekly."
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
