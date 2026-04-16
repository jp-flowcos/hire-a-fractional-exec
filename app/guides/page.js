import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import { getAllGuides } from "@/libs/guides-content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = getSEOTags({
  title: "Fractional Executive Guides | HireAFractionalExec",
  description:
    "In-depth guides on fractional executive work: what fractional COOs do, how much they cost, how to become one, and how to hire one. Written by a practicing fractional COO.",
  keywords: [
    "fractional executive guides",
    "fractional coo guide",
    "how to become a fractional executive",
    "what does a fractional coo do",
  ],
  canonicalUrlRelative: "/guides",
});

export default function GuidesIndexPage() {
  const guides = getAllGuides();

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-8 py-12">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />

        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          Fractional Executive Guides
        </h1>
        <p className="text-lg text-base-content/70 mb-10 max-w-2xl leading-relaxed">
          Everything you need to know about fractional executive work — what the
          roles look like, what they pay, and how to land one. Written by a
          practicing fractional COO.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="card bg-base-200/50 border border-base-300 hover:border-primary/50 transition-colors"
            >
              <div className="card-body">
                <h2 className="card-title text-lg">{guide.title}</h2>
                <p className="text-sm text-base-content/60 line-clamp-3">
                  {guide.definition}
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs text-base-content/50">
                  {guide.author && <span>By {guide.author}</span>}
                  {guide.updatedAt && (
                    <>
                      <span>&middot;</span>
                      <span>
                        {new Date(guide.updatedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
