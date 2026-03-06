import { getSEOTags } from "@/libs/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostJobForm from "@/components/PostJobForm";
import config from "@/config";

export const metadata = getSEOTags({
  title: "Post a Fractional Executive Job | HireAFractionalExec",
  description:
    "Post your fractional COO, CMO, CFO, CTO, or C-suite role. Reach qualified fractional executives. Listings start at $299 for 30 days.",
  keywords: [
    "post fractional executive job",
    "hire fractional COO",
    "hire fractional CMO",
    "fractional executive job board",
  ],
  canonicalUrlRelative: "/post-a-job",
});

export default function PostAJobPage() {
  const plans = config.stripe.plans;

  return (
    <>
      <Header />

      <main className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-base-content mb-4">
            Post a Fractional Executive Role
          </h1>
          <p className="text-lg text-base-content/60 mb-12 max-w-2xl">
            Reach fractional COOs, CMOs, CFOs, CTOs, and Chiefs of Staff.
            Your listing goes live within 24 hours after review.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card bg-base-200 border ${
                  plan.isFeatured
                    ? "border-secondary"
                    : "border-base-300"
                }`}
              >
                <div className="card-body">
                  {plan.isFeatured && (
                    <span className="badge badge-secondary badge-sm self-start mb-2">
                      Most Popular
                    </span>
                  )}
                  <h2 className="card-title text-xl">{plan.name}</h2>
                  <p className="text-base-content/60 text-sm">
                    {plan.description}
                  </p>
                  <div className="mt-4 mb-4">
                    <span className="text-3xl font-extrabold text-base-content">
                      ${plan.price}
                    </span>
                    {plan.priceAnchor && (
                      <span className="text-base-content/40 line-through ml-2">
                        ${plan.priceAnchor}
                      </span>
                    )}
                    <span className="text-base-content/60 text-sm ml-1">
                      one-time
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.name}
                        className="flex items-center gap-2 text-sm text-base-content/80"
                      >
                        <svg
                          className="w-4 h-4 text-success shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Job Posting Form */}
          <div className="card bg-base-200 border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">Job Details</h2>
              <PostJobForm plans={plans} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
