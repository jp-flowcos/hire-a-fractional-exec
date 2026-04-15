import CategoryPage from "@/components/CategoryPage";
import { getSEOTags } from "@/libs/seo";
import categories from "@/libs/category-content";

export const revalidate = 300;

const SLUG = "fractional-cro-jobs";

export const metadata = getSEOTags({
  title: categories[SLUG].metaTitle,
  description: categories[SLUG].metaDescription,
  keywords: categories[SLUG].keywords,
  canonicalUrlRelative: `/${SLUG}`,
});

export default function Page() {
  return <CategoryPage categorySlug={SLUG} />;
}
