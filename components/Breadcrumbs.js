import Link from "next/link";

const Breadcrumbs = ({ items }) => {
  if (!items || items.length === 0) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? {
            item: `${process.env.NEXT_PUBLIC_SITE_URL || ""}${item.href}`,
          }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="breadcrumbs text-sm">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.href && index < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="text-base-content/70 hover:text-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-base-content">{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Breadcrumbs;
