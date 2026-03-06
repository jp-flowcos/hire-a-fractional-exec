import Link from "next/link";

const CategoryCard = ({ title, description, href, jobCount }) => {
  return (
    <Link href={href} className="card bg-base-100 shadow-sm border border-base-300 hover:border-primary hover:shadow-md transition-all">
      <div className="card-body">
        <h3 className="card-title text-base">{title}</h3>
        {description && (
          <p className="text-sm text-base-content/70 line-clamp-2">
            {description}
          </p>
        )}
        <div className="card-actions mt-2">
          <span className="badge badge-ghost badge-sm">
            {jobCount} {jobCount === 1 ? "job" : "jobs"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
