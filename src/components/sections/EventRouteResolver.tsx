'use client';

import { EventDetails } from '@/src/pages/EventDetails';
import { Awards } from '@/src/pages/Awards';
import { WorkshopsFDP } from '@/src/pages/WorkshopsFDP';
import { ResearchForums } from '@/src/pages/ResearchForums';
import { InternationalConferences } from '@/src/pages/InternationalConferences';
import { UpcomingEvents } from '@/src/pages/UpcomingEvents';

export function EventRouteResolver({ slug }: { slug: string }) {
  console.log("EventRouteResolver", slug)
  switch (slug) {
    case 'icas-2026':
      return <EventDetails />;
    case 'awards-2025':
      return <Awards />;
    case 'workshop-2026':
      return <WorkshopsFDP />;
    case 'forum-2025':
      return <ResearchForums />;
    case 'icgsd-2025':
    case 'grf-2026':
      return <InternationalConferences />;
    case 'summit-2025':
      return <UpcomingEvents />;
    default:
      return <EventDetails />;
  }
}
