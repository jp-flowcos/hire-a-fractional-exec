import Link from "next/link";
import categories from "@/libs/category-content";
import { getCity, getCitySlugsForRole, getAllCityEntries } from "@/libs/city-content";
import { getJobsByRoleTypeAndCity } from "@/libs/api/jobs";
import { formatRoleType } from "@/libs/utils";
import JobCard from "@/components/JobCard";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function CityPage({ categorySlug, citySlug }) {
  const category = categories[categorySlug];
  const city = getCity(citySlug);

  if (!category || !city) {
    return (
      <div className="max-w-5xl mx-auto px-8 py-24">City page not found.</div>
    );
  }

  const { roleType, author, authorTitle } = category;
  const roleLabel = formatRoleType(roleType);
  const isRemote = citySlug === "remote";

  let jobs = [];
  try {
    jobs = await getJobsByRoleTypeAndCity(roleType, city.locationPatterns, {
      isRemote,
    });
  } catch (err) {
    console.error(
      `[CityPage:${categorySlug}/${citySlug}] getJobsByRoleTypeAndCity failed:`,
      err
    );
  }

  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const cityName = city.name;
  const h1 = isRemote
    ? `Remote ${roleLabel} jobs`
    : `${roleLabel} jobs in ${cityName}`;
  const subtitle = isRemote
    ? `Every remote fractional ${roleLabel} role posted in the last 30 days. No commute required.`
    : `Fractional ${roleLabel} roles in the ${city.metro} area. Stop hunting. Apply and get back to work.`;

  // Pick 5 nearby/related cities for cross-linking (exclude current)
  const allCitySlugs = getCitySlugsForRole(categorySlug);
  const nearbyCities = allCitySlugs
    .filter((s) => s !== citySlug)
    .slice(0, 6)
    .map((s) => {
      const c = getCity(s);
      return c ? { slug: s, name: c.name, state: c.state } : null;
    })
    .filter(Boolean);

  // FAQs — city-specific where possible
  const faqs = isRemote
    ? [
        {
          question: `Are most fractional ${roleLabel} roles remote?`,
          answer: `Yes. The majority of fractional executive engagements are fully remote, with occasional onsite days for strategy sessions or team offsites. Remote-first has been the norm since 2020, and most companies hiring fractional ${roleLabel}s care more about timezone overlap and domain expertise than physical location.`,
        },
        {
          question: `How do remote fractional ${roleLabel}s structure their week?`,
          answer: `Most remote fractional ${roleLabel}s work 10-15 hours per week per client. A typical week includes 2-3 standing meetings (leadership sync, 1:1s, project reviews), 1-2 deep-focus blocks for process design or strategic planning, and async communication via Slack or email. The key is cadence, not hours logged.`,
        },
        {
          question: `Do remote fractional ${roleLabel}s ever travel onsite?`,
          answer: `Usually 1-2 days per quarter for strategy offsites, team planning, or board prep. Some clients request monthly onsite days during the first 60-90 days of the engagement, then shift to fully remote once trust and operating rhythm are established.`,
        },
      ]
    : [
        {
          question: `How much do fractional ${roleLabel}s charge in ${cityName}?`,
          answer: `Fractional ${roleLabel} retainers in ${cityName} typically run $8,000-$18,000 per month in 2026, consistent with national averages. ${city.state === "CA" || city.state === "NY" ? "Rates in " + cityName + " tend toward the higher end of that range due to cost of living and client expectations." : "Rates vary based on scope, industry, and experience rather than geography — remote work has compressed the geographic premium."}`,
        },
        {
          question: `Are ${cityName} fractional ${roleLabel} roles remote or onsite?`,
          answer: `Most fractional ${roleLabel} roles in ${cityName} are remote or hybrid. Hybrid typically means 1-2 days onsite per week or per month, with the rest remote. Fully onsite fractional engagements are rare — the economics don't work for operators managing multiple clients.`,
        },
        {
          question: `How do I find fractional ${roleLabel} work in ${cityName}?`,
          answer: `Start with this board — we aggregate fractional roles from across the web and filter to ${cityName}-area listings. Beyond that, tap your local network: operator meetups, PE/VC portfolio introductions, and LinkedIn outreach to founders in the ${city.metro} area. Most first engagements come from people who already know your work.`,
        },
      ];

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="max-w-5xl mx-auto px-8 py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: category.title, href: `/${categorySlug}` },
            { label: isRemote ? "Remote" : cityName },
          ]}
        />

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{h1}</h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-base-content/70 mb-4 leading-relaxed">
          {subtitle}
        </p>

        {/* Author + Last updated */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-base-content/60 mb-8">
          {author && (
            <span>
              By{" "}
              <span className="font-semibold text-base-content/80">
                {author}
              </span>
              {authorTitle ? ` — ${authorTitle}` : ""}
            </span>
          )}
          {author && <span aria-hidden="true">&middot;</span>}
          <span>Last updated {lastUpdated}</span>
        </div>

        {/* City-specific description */}
        <div className="prose prose-lg max-w-none mb-12">
          <p>{city.description}</p>
        </div>

        {/* Job listings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {isRemote ? "Remote" : cityName} {roleLabel} Positions
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
                  No {isRemote ? "remote" : cityName}{" "}
                  {roleLabel.toLowerCase()} positions right now.
                </p>
                <p className="text-base-content/50 text-sm mt-1">
                  Subscribe below to get notified when new roles are posted.
                </p>
                <Link
                  href={`/${categorySlug}`}
                  className="btn btn-outline btn-sm mt-4"
                >
                  Browse all {roleLabel} jobs &rarr;
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* FAQ section */}
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

        {/* Email capture */}
        <section className="mb-12 max-w-lg mx-auto">
          <EmailCaptureForm
            roleType={roleType}
            title={`Get new ${roleLabel} jobs weekly`}
            description={`Subscribe to receive the latest ${roleLabel.toLowerCase()} positions${isRemote ? "" : ` in ${cityName}`} delivered to your inbox.`}
          />
        </section>

        {/* Other cities cross-links */}
        {nearbyCities.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              {roleLabel} Jobs in Other Cities
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${categorySlug}/${c.slug}`}
                  className="btn btn-outline btn-sm"
                >
                  {c.name}{c.state ? `, ${c.state}` : ""}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to parent category */}
        <div className="text-center">
          <Link
            href={`/${categorySlug}`}
            className="btn btn-ghost btn-sm text-primary"
          >
            &larr; All {category.title}
          </Link>
        </div>
      </main>
    </>
  );
}
