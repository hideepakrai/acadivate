import { EventRouteResolver } from '@/src/components/sections/EventRouteResolver';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <EventRouteResolver slug={slug} />;
}
