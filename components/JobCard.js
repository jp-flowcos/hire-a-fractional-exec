import Link from "next/link";
import Image from "next/image";
import {
  formatRoleType,
  formatLocationType,
  formatSalary,
  timeAgo,
} from "@/libs/utils";

const JobCard = ({ job }) => {
  const {
    slug,
    title,
    company_name,
    company_logo_url,
    role_type,
    location_type,
    salary_min,
    salary_max,
    salary_type,
    hours_per_week,
    is_featured,
    created_at,
  } = job;

  const salary = formatSalary(salary_min, salary_max, salary_type);

  return (
    <div
      className={`card bg-base-200 border transition-all duration-200 hover:border-primary ${
        is_featured
          ? "border-l-4 border-l-secondary border-t-base-300 border-r-base-300 border-b-base-300"
          : "border-base-300"
      }`}
    >
      <div className="card-body gap-3 p-6">
        {/* Top row: company logo + featured badge + time */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {company_logo_url && (
              <Image
                src={company_logo_url}
                alt={`${company_name} logo`}
                width={40}
                height={40}
                className="rounded-lg shrink-0"
              />
            )}
            <div className="min-w-0">
              <Link
                href={`/jobs/${slug}`}
                className="text-base font-semibold text-base-content hover:text-primary transition-colors line-clamp-1"
              >
                {title}
              </Link>
              {company_name && (
                <p className="text-sm text-base-content/60">{company_name}</p>
              )}
            </div>
          </div>
          {is_featured && (
            <span className="badge badge-secondary badge-sm font-mono text-xs shrink-0">
              FEATURED
            </span>
          )}
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-2">
          {role_type && (
            <span className="badge badge-primary badge-outline badge-sm font-mono text-xs">
              {formatRoleType(role_type)}
            </span>
          )}
          {location_type && (
            <span
              className={`badge badge-sm font-mono text-xs ${
                location_type === "remote"
                  ? "badge-success badge-outline"
                  : location_type === "hybrid"
                  ? "badge-warning badge-outline"
                  : "badge-ghost"
              }`}
            >
              {formatLocationType(location_type)}
            </span>
          )}
          {hours_per_week && (
            <span className="badge badge-ghost badge-sm font-mono text-xs">
              {hours_per_week} hrs/wk
            </span>
          )}
        </div>

        {/* Bottom row: salary + posted time */}
        <div className="flex items-center justify-between mt-1">
          {salary && (
            <span className="text-sm font-medium text-base-content/80">
              {salary}
            </span>
          )}
          <span className="text-xs text-base-content/40 ml-auto">
            {timeAgo(created_at)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
