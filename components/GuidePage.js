import Link from "next/link";
import categories from "@/libs/category-content";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmailCaptureForm from "@/components/EmailCaptureForm";

/**
 * Renders lightweight markup used in guide body content.
 * Supports: ## H2, ### H3, - bullets, > blockquotes, | tables, paragraphs.
 */
function renderGuideBody(body) {
  const blocks = body.split("\n\n");
  const elements = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i].trim();
    if (!block) {
      i++;
      continue;
    }

    // H2
    if (block.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl font-bold mt-10 mb-4 text-base-content"
        >
          {block.replace(/^## /, "")}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (block.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-xl font-bold mt-8 mb-3 text-base-content"
        >
          {block.replace(/^### /, "")}
        </h3>
      );
      i++;
      continue;
    }

    // Blockquote
    if (block.startsWith("> ")) {
      elements.push(
        <blockquote
          key={i}
          className="border-l-4 border-primary pl-4 py-2 my-6 text-base-content/80 italic"
        >
          {block.replace(/^> /, "")}
        </blockquote>
      );
      i++;
      continue;
    }

    // Bullet list
    if (block.match(/^- /m)) {
      const items = block.split("\n").filter((l) => l.trim());
      elements.push(
        <ul
          key={i}
          className="list-disc list-outside ml-6 space-y-1 mb-4 text-base-content/80"
        >
          {items.map((item, j) => (
            <li key={j} className="leading-relaxed">
              {item.replace(/^- /, "")}
            </li>
          ))}
        </ul>
      );
      i++;
      continue;
    }

    // Table
    if (block.startsWith("|")) {
      const rows = block
        .split("\n")
        .filter((r) => r.trim() && !r.trim().match(/^\|[\s-|]+\|$/));
      if (rows.length > 0) {
        const headerCells = rows[0]
          .split("|")
          .filter(Boolean)
          .map((c) => c.trim());
        const bodyRows = rows.slice(1);

        elements.push(
          <div key={i} className="overflow-x-auto my-6">
            <table className="table table-sm">
              <thead>
                <tr>
                  {headerCells.map((cell, j) => (
                    <th key={j} className="text-base-content/80">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, ri) => {
                  const cells = row
                    .split("|")
                    .filter(Boolean)
                    .map((c) => c.trim());
                  return (
                    <tr key={ri}>
                      {cells.map((cell, ci) => (
                        <td key={ci} className="text-base-content/70">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} className="text-base-content/80 leading-relaxed mb-4">
        {block}
      </p>
    );
    i++;
  }

  return elements;
}

export default function GuidePage({ guide }) {
  if (!guide) {
    return (
      <div className="max-w-5xl mx-auto px-8 py-24">Guide not found.</div>
    );
  }

  const relatedCategory = guide.relatedCategorySlug
    ? categories[guide.relatedCategorySlug]
    : null;

  const lastUpdated = new Date(guide.updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const faqJsonLd = guide.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.definition,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    author: guide.author
      ? {
          "@type": "Person",
          name: guide.author,
          jobTitle: guide.authorTitle || undefined,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "HireAFractionalExec",
      url: "https://hireafractionalexec.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hireafractionalexec.com/guides/${guide.slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <main className="max-w-3xl mx-auto px-8 py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: guide.title },
          ]}
        />

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 mt-2">
          {guide.title}
        </h1>

        {/* Author + date */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-base-content/60 mb-6">
          {guide.author && (
            <span>
              By{" "}
              <span className="font-semibold text-base-content/80">
                {guide.author}
              </span>
              {guide.authorTitle ? ` — ${guide.authorTitle}` : ""}
            </span>
          )}
          {guide.author && <span aria-hidden="true">&middot;</span>}
          <span>Last updated {lastUpdated}</span>
        </div>

        {/* Definition callout */}
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5 mb-8">
          <p className="text-base-content/80 text-base leading-relaxed">
            {guide.definition}
          </p>
        </div>

        {/* Body */}
        <article className="prose prose-lg max-w-none">
          {renderGuideBody(guide.body)}
        </article>

        {/* Related category CTA */}
        {relatedCategory && (
          <div className="flex items-center gap-3 bg-base-200/50 border border-base-300 rounded-lg p-4 mt-10 mb-8">
            <span className="text-base-content/70 text-sm">
              Looking for roles?
            </span>
            <Link
              href={`/${guide.relatedCategorySlug}`}
              className="btn btn-outline btn-sm btn-primary"
            >
              Browse {relatedCategory.title} &rarr;
            </Link>
          </div>
        )}

        {/* FAQ section */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {guide.faqs.map((faq, i) => (
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
        )}

        {/* Email capture */}
        <section className="mb-12 max-w-lg mx-auto">
          <EmailCaptureForm
            title="Get fractional executive insights weekly"
            description="Join our newsletter for the latest roles, salary data, and guides for fractional executives."
          />
        </section>
      </main>
    </>
  );
}
