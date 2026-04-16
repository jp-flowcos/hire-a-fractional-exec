import { notFound } from "next/navigation";
import { getSEOTags } from "@/libs/seo";
import { getGuide, getAllGuideSlugs } from "@/libs/guides-content";
import GuidePage from "@/components/GuidePage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllGuideSlugs().map((guideSlug) => ({ guideSlug }));
}

export async function generateMetadata({ params }) {
  const { guideSlug } = await params;
  const guide = getGuide(guideSlug);

  if (!guide) return {};

  return getSEOTags({
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    canonicalUrlRelative: `/guides/${guide.slug}`,
  });
}

export default async function Page({ params }) {
  const { guideSlug } = await params;
  const guide = getGuide(guideSlug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <Header />
      <GuidePage guide={guide} />
      <Footer />
    </>
  );
}
