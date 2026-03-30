import { EventRouteResolver } from '@/src/components/sections/EventRouteResolver';
import { getSEO } from '@/src/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  console.log("slgdgdgdhg", slug)
  const event = await getSEO(slug);

  return {
    title: event?.metaTitle || "Default Title",
    description: event?.metaDescription || "Default description",
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <EventRouteResolver slug={slug} />;
}
