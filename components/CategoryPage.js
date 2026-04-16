import Link from "next/link";
import categories from "@/libs/category-content";
import { getJobsByRoleType } from "@/libs/api/jobs";
import { formatRoleType } from "@/libs/utils";
import JobCard from "@/components/JobCard";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function CategoryPage({ categorySlug }) {
  const category = categories[categorySlug];

  if (!category) {
    return <div className="max-w-5xl mx-auto px-8 py-24">Category not found.</div>;
  }

  const {
    roleType,
    title,
    h1,
    subheadline,
    definition,
    body,
    faqs,
    relatedCategories,
    keywords,
    author,
    authorTitle,
  } = category;

  let jobs = [];
  try {
    jobs = await getJobsByRoleType(roleType);
  } catch (err) {
    console.error(`[CategoryPage:${categorySlug}] getJobsByRoleType failed:`, err);
  }
  const roleLabel = formatRoleType(roleType);

  // Freshness signal for AEO — ISR revalidates this on each regeneration.
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Build FAQ JSON-LD structured data
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Split body into paragraphs
  const bodyParagraphs = body
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      {/* JSON-LD FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="max-w-5xl mx-auto px-8 py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: title },
          ]}
        />

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{h1}</h1>

        {/* Subheadline — the pain-point hook per context doc §4.5 */}
        {subheadline && (
          <p className="text-lg md:text-xl text-base-content/70 mb-4 leading-relaxed">
            {subheadline}
          </p>
        )}

        {/* Author + Last updated — AEO freshness + E-E-A-T signals */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-base-content/60 mb-8">
          {author && (
            <span>
              By <span className="font-semibold text-base-content/80">{author}</span>
              {authorTitle ? ` — ${authorTitle}` : ""}
            </span>
          )}
          {author && <span aria-hidden="true">·</span>}
          <span>Last updated {lastUpdated}</span>
        </div>

        {/* Definition callout — optimized for 40-60 word snippet extraction */}
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5 mb-8">
          <p className="text-base-content/80 text-base leading-relaxed">
            {definition}
          </p>
        </div>

        {/* Body copy */}
        <div className="prose prose-lg max-w-none mb-12">
          {bodyParagraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Job listings section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Open {roleLabel} Positions
          </h2>

          {jobs && jobs.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="card bg-base-200/50 border border-base-300">
              <div className="card-body items-center text-center py-12">
                <p className="text-base-content/60 text-lg">
                  No open {roleLabel.toLowerCase()} positions right now.
                </p>
                <p className="text-base-content/50 text-sm mt-1">
                  Subscribe below to get notified when new roles are posted.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* FAQ section — details/summary accordion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg"
              >
                <summary className="collapse-title text-base font-medium cursor-pointer">
                  {faq.question}
                </summary>
                <div className="collapse-content">
                  <p className="text-base-content/70 leading-relaxed pt-0">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Email capture CTA */}
        <section className="mb-12 max-w-lg mx-auto">
          <EmailCaptureForm
            roleType={roleType}
            title={`Get new ${roleLabel} jobs weekly`}
            description={`Subscribe to receive the latest ${roleLabel.toLowerCase()} positions delivered to your inbox every week.`}
          />
        </section>

        {/* Related categories */}
        {relatedCategories && relatedCategories.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Related Categories</h2>
            <div className="flex flex-wrap gap-3">
              {relatedCategories.map((slug) => {
                const related = categories[slug];
                if (!related) return null;
                return (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="btn btn-outline btn-sm"
                  >
                    {related.title}
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
