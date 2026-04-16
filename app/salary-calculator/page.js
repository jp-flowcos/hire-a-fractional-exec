import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SalaryCalculator from "@/components/SalaryCalculator";

export const metadata = getSEOTags({
  title: "Fractional Executive Salary Calculator | HireAFractionalExec",
  description:
    "How much does a fractional executive cost? Use our salary calculator to estimate monthly retainers for fractional COO, CMO, CFO, CTO, and other C-suite roles.",
  keywords: [
    "fractional executive salary",
    "fractional COO cost",
    "fractional CMO salary",
    "fractional CFO cost",
    "part-time executive compensation",
  ],
  canonicalUrlRelative: "/salary-calculator",
});

const SALARY_ESTIMATES = {
  fractional_coo: {
    label: "Fractional COO",
    ranges: [
      { stage: "Pre-Seed / Seed", hours: "5-10", low: 2000, high: 5000 },
      { stage: "Series A", hours: "10-15", low: 5000, high: 10000 },
      { stage: "Series B+", hours: "15-20", low: 8000, high: 15000 },
      { stage: "Bootstrapped SMB", hours: "10-15", low: 3000, high: 8000 },
    ],
  },
  fractional_cmo: {
    label: "Fractional CMO",
    ranges: [
      { stage: "Pre-Seed / Seed", hours: "5-10", low: 3000, high: 6000 },
      { stage: "Series A", hours: "10-15", low: 5000, high: 12000 },
      { stage: "Series B+", hours: "15-20", low: 10000, high: 18000 },
      { stage: "Bootstrapped SMB", hours: "10-15", low: 4000, high: 9000 },
    ],
  },
  fractional_cfo: {
    label: "Fractional CFO",
    ranges: [
      { stage: "Pre-Seed / Seed", hours: "5-10", low: 2000, high: 5000 },
      { stage: "Series A", hours: "10-15", low: 4000, high: 10000 },
      { stage: "Series B+", hours: "15-20", low: 8000, high: 15000 },
      { stage: "Bootstrapped SMB", hours: "5-10", low: 2500, high: 6000 },
    ],
  },
  fractional_cto: {
    label: "Fractional CTO",
    ranges: [
      { stage: "Pre-Seed / Seed", hours: "5-10", low: 3000, high: 7000 },
      { stage: "Series A", hours: "10-15", low: 6000, high: 13000 },
      { stage: "Series B+", hours: "15-20", low: 10000, high: 18000 },
      { stage: "Bootstrapped SMB", hours: "10-15", low: 4000, high: 10000 },
    ],
  },
  fractional_cro: {
    label: "Fractional CRO",
    ranges: [
      { stage: "Pre-Seed / Seed", hours: "5-10", low: 3000, high: 6000 },
      { stage: "Series A", hours: "10-15", low: 5000, high: 12000 },
      { stage: "Series B+", hours: "15-20", low: 10000, high: 18000 },
      { stage: "Bootstrapped SMB", hours: "10-15", low: 4000, high: 10000 },
    ],
  },
  fractional_cos: {
    label: "Chief of Staff",
    ranges: [
      { stage: "Pre-Seed / Seed", hours: "5-10", low: 2000, high: 4000 },
      { stage: "Series A", hours: "10-15", low: 3500, high: 7000 },
      { stage: "Series B+", hours: "15-20", low: 6000, high: 10000 },
      { stage: "Bootstrapped SMB", hours: "10-15", low: 2500, high: 6000 },
    ],
  },
  head_of_ops: {
    label: "Head of Ops",
    ranges: [
      { stage: "Pre-Seed / Seed", hours: "10-15", low: 2000, high: 4000 },
      { stage: "Series A", hours: "15-20", low: 3500, high: 7000 },
      { stage: "Series B+", hours: "20-30", low: 6000, high: 10000 },
      { stage: "Bootstrapped SMB", hours: "10-15", low: 2500, high: 5000 },
    ],
  },
};

export default function SalaryCalculatorPage() {
  return (
    <>
      <Header />

      <main className="py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-base-content mb-4">
            Fractional Executive Salary Calculator
          </h1>
          <p className="text-lg text-base-content/60 mb-4 max-w-2xl">
            How much does a fractional executive cost? Estimate monthly
            retainers based on role type, company stage, and hours per week.
          </p>
          <p className="text-sm text-base-content/50 mb-12">
            Last updated: April 2026 &middot; Source: market research across US fractional executive engagements
          </p>

          <SalaryCalculator salaryData={SALARY_ESTIMATES} />

          {/* Methodology note */}
          <div className="mt-16 card bg-base-200 border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-lg">About These Estimates</h2>
              <p className="text-sm text-base-content/60 leading-relaxed">
                These salary ranges are based on market data from fractional
                executive engagements across the US. Actual rates vary based on
                experience, industry, geography, and scope of work. Ranges
                represent monthly retainers, not project-based fees.
                All figures are in USD.
              </p>
            </div>
          </div>
          {/* Browse jobs by role */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-base-content mb-4">
              Browse Fractional Executive Jobs
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/fractional-coo-jobs" className="btn btn-outline btn-sm">Fractional COO Jobs</Link>
              <Link href="/fractional-cmo-jobs" className="btn btn-outline btn-sm">Fractional CMO Jobs</Link>
              <Link href="/fractional-cfo-jobs" className="btn btn-outline btn-sm">Fractional CFO Jobs</Link>
              <Link href="/fractional-cto-jobs" className="btn btn-outline btn-sm">Fractional CTO Jobs</Link>
              <Link href="/fractional-cro-jobs" className="btn btn-outline btn-sm">Fractional CRO Jobs</Link>
              <Link href="/fractional-cos-jobs" className="btn btn-outline btn-sm">Chief of Staff Jobs</Link>
              <Link href="/head-of-ops-jobs" className="btn btn-outline btn-sm">Head of Ops Jobs</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
