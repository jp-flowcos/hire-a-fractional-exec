import CategoryPage from "@/components/CategoryPage";
import { getSEOTags } from "@/libs/seo";
import categories from "@/libs/category-content";

const SLUG = "fractional-cos-jobs";

export const metadata = getSEOTags({
  title: categories[SLUG].metaTitle,
  description: categories[SLUG].metaDescription,
  keywords: categories[SLUG].keywords,
  canonicalUrlRelative: `/${SLUG}`,
});

export default function Page() {
  return <CategoryPage categorySlug={SLUG} />;
}
