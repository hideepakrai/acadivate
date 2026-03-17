'use client';

import * as React from 'react';
import { EventHero } from '../components/sections/EventHero';
import { EventMain } from '../components/sections/EventMain';
import { CTA } from '../components/sections/CTA';

export const EventDetails = () => {
  return (
    <div className="overflow-hidden">
      <EventHero />
      <EventMain />
      <CTA />
    </div>
  );
};
