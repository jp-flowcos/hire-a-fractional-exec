import Link from "next/link";
import { notFound } from "next/navigation";
import { getSEOTags } from "@/libs/seo";
import { getJobBySlug, getSimilarJobs } from "@/libs/api/jobs";
import {
  formatRoleType,
  formatLocationType,
  formatSalary,
  timeAgo,
} from "@/libs/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import config from "@/config";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    return getSEOTags({
      title: "Job Not Found | HireAFractionalExec",
      description: "This job listing could not be found.",
    });
  }

  const title = `${job.title}${job.company_name ? ` at ${job.company_name}` : ""} | HireAFractionalExec`;
  const description =
    job.description?.slice(0, 155).replace(/\s+/g, " ").trim() + "..." ||
    `${job.title} — fractional executive opportunity.`;

  return getSEOTags({
    title,
    description,
    keywords: [
      formatRoleType(job.role_type),
      "fractional executive",
      job.location_type,
      job.company_name,
    ].filter(Boolean),
    openGraph: {
      title,
      description,
      url: `https://${config.domainName}/jobs/${slug}`,
    },
    canonicalUrlRelative: `/jobs/${slug}`,
  });
}

function renderDescription(text) {
  if (!text) return null;

  // Basic markdown-like rendering: paragraphs, bold, links, lists
  const paragraphs = text.split(/\n\n+/);

  return paragraphs.map((para, i) => {
    const trimmed = para.trim();

    // Detect bullet lists
    if (trimmed.match(/^[-*]\s/m)) {
      const items = trimmed.split(/\n/).filter((line) => line.trim());
      return (
        <ul key={i} className="list-disc list-inside space-y-1 mb-4">
          {items.map((item, j) => (
            <li key={j}>{item.replace(/^[-*]\s*/, "")}</li>
          ))}
        </ul>
      );
    }

    // Detect headings (### or ##)
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={i} className="text-lg font-semibold mt-6 mb-2">
          {trimmed.replace(/^###\s*/, "")}
        </h3>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="text-xl font-bold mt-6 mb-2">
          {trimmed.replace(/^##\s*/, "")}
        </h2>
      );
    }

    // Regular paragraph
    return (
      <p key={i} className="mb-4 leading-relaxed">
        {trimmed}
      </p>
    );
  });
}

function JobPostingJsonLd({ job }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.posted_at,
    validThrough: job.expires_at,
    employmentType: "CONTRACTOR",
    jobLocationType: job.location_type === "remote" ? "TELECOMMUTE" : undefined,
    applicantLocationRequirements: job.location_type === "remote"
      ? { "@type": "Country", name: "US" }
      : undefined,
    hiringOrganization: job.company_name
      ? {
          "@type": "Organization",
          name: job.company_name,
          sameAs: job.company_url || undefined,
          logo: job.company_logo || undefined,
        }
      : { "@type": "Organization", name: "Confidential" },
    jobLocation: job.location
      ? {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.location,
          },
        }
      : undefined,
    baseSalary:
      job.salary_min || job.salary_max
        ? {
            "@type": "MonetaryAmount",
            currency: "USD",
            value: {
              "@type": "QuantitativeValue",
              minValue: job.salary_min || undefined,
              maxValue: job.salary_max || undefined,
              unitText: job.salary_type === "hourly" ? "HOUR" : job.salary_type === "annual" ? "YEAR" : "MONTH",
            },
          }
        : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function JobDetailPage({ params }) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  let similarJobs = [];
  try {
    similarJobs = await getSimilarJobs(job.role_type, job.id, 3);
  } catch {
    // Silently handle
  }

  const salary = formatSalary(job.salary_min, job.salary_max, job.salary_type);

  return (
    <>
      <JobPostingJsonLd job={job} />
      <Header />

      <main className="py-10 px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Jobs", href: "/jobs" },
              { label: job.title },
            ]}
          />

          <div className="flex flex-col lg:flex-row gap-10 mt-8">
            {/* Main Content */}
            <article className="flex-1">
              {/* Header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {job.is_featured && (
                    <span className="badge badge-primary badge-sm">
                      Featured
                    </span>
                  )}
                  {job.role_type && (
                    <span className="badge badge-outline badge-sm">
                      {formatRoleType(job.role_type)}
                    </span>
                  )}
                  {job.location_type && (
                    <span className="badge badge-outline badge-sm">
                      {formatLocationType(job.location_type)}
                    </span>
                  )}
                  {job.hours_per_week && (
                    <span className="badge badge-outline badge-sm">
                      {job.hours_per_week} hrs/week
                    </span>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-base-content mb-2">
                  {job.title}
                </h1>

                {job.company_name && (
                  <p className="text-lg text-base-content/70 mb-1">
                    {job.company_url ? (
                      <a
                        href={job.company_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-hover"
                      >
                        {job.company_name}
                      </a>
                    ) : (
                      job.company_name
                    )}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/60 mt-3">
                  {job.location && <span>{job.location}</span>}
                  {salary && <span>{salary}</span>}
                  {job.posted_at && <span>Posted {timeAgo(job.posted_at)}</span>}
                </div>
              </div>

              {/* Apply Button (top) */}
              {job.apply_url && (
                <div className="mb-8">
                  <a
                    href={job.apply_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    Apply Now
                  </a>
                </div>
              )}

              {/* Job Description */}
              <div className="prose prose-base max-w-none text-base-content/80">
                {renderDescription(job.description)}
              </div>

              {/* Apply Button (bottom) */}
              {job.apply_url && (
                <div className="mt-10 pt-8 border-t border-base-content/10">
                  <a
                    href={job.apply_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    Apply Now
                  </a>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 flex-shrink-0">
              {/* Job Summary Card */}
              <div className="card bg-base-200 mb-6">
                <div className="card-body">
                  <h3 className="card-title text-lg">Job Summary</h3>
                  <div className="space-y-3 text-sm">
                    {job.role_type && (
                      <div className="flex justify-between">
                        <span className="text-base-content/60">Role</span>
                        <span className="font-medium">
                          {formatRoleType(job.role_type)}
                        </span>
                      </div>
                    )}
                    {job.location_type && (
                      <div className="flex justify-between">
                        <span className="text-base-content/60">Location</span>
                        <span className="font-medium">
                          {formatLocationType(job.location_type)}
                          {job.location ? ` — ${job.location}` : ""}
                        </span>
                      </div>
                    )}
                    {salary && (
                      <div className="flex justify-between">
                        <span className="text-base-content/60">Salary</span>
                        <span className="font-medium">{salary}</span>
                      </div>
                    )}
                    {job.hours_per_week && (
                      <div className="flex justify-between">
                        <span className="text-base-content/60">Hours</span>
                        <span className="font-medium">
                          {job.hours_per_week} hrs/week
                        </span>
                      </div>
                    )}
                    {job.posted_at && (
                      <div className="flex justify-between">
                        <span className="text-base-content/60">Posted</span>
                        <span className="font-medium">
                          {timeAgo(job.posted_at)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Similar Jobs */}
              {similarJobs.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-base-content mb-4">
                    Similar Jobs
                  </h3>
                  <div className="space-y-4">
                    {similarJobs.map((sJob) => (
                      <JobCard key={sJob.id} job={sJob} />
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>

          {/* Email Capture */}
          <section className="mt-20">
            <div className="max-w-2xl mx-auto text-center">
              <EmailCaptureForm
                roleType={job.role_type}
                title={`Get More ${formatRoleType(job.role_type)} Jobs`}
                description={`Subscribe to receive new ${formatRoleType(job.role_type).toLowerCase()} opportunities in your inbox.`}
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
