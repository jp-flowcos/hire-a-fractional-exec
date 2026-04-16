import { notFound } from "next/navigation";
import { getSEOTags } from "@/libs/seo";
import categories from "@/libs/category-content";
import { getCity, getCitySlugsForRole } from "@/libs/city-content";
import CityPage from "@/components/CityPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const revalidate = 300;
export const dynamicParams = false;

const CATEGORY_SLUG = "fractional-coo-jobs";

export function generateStaticParams() {
  return getCitySlugsForRole(CATEGORY_SLUG).map((city) => ({ city }));
}

export async function generateMetadata({ params }) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  const category = categories[CATEGORY_SLUG];

  if (!city || !category) return {};

  const isRemote = citySlug === "remote";
  const locationLabel = isRemote ? "Remote" : city.name;

  return getSEOTags({
    title: `${category.title} in ${locationLabel} | HireAFractionalExec`,
    description: isRemote
      ? `Browse remote fractional COO positions. Every remote fractional Chief Operating Officer role posted in the last 30 days.`
      : `Fractional COO jobs in ${city.name}, ${city.state}. Browse fractional Chief Operating Officer roles in the ${city.metro} area. Stop hunting. Apply and get back to work.`,
    keywords: [
      ...(category.keywords || []),
      isRemote
        ? "remote fractional coo"
        : `fractional coo ${city.name.toLowerCase()}`,
      isRemote
        ? "remote coo jobs"
        : `fractional coo jobs ${city.name.toLowerCase()}`,
    ],
    canonicalUrlRelative: `/${CATEGORY_SLUG}/${citySlug}`,
  });
}

export default async function Page({ params }) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);

  if (!city) {
    notFound();
  }

  return (
    <>
      <Header />
      <CityPage categorySlug={CATEGORY_SLUG} citySlug={citySlug} />
      <Footer />
    </>
  );
}
