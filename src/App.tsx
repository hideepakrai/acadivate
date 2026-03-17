'use client';

import * as React from 'react';
import { AppShell } from '@/src/components/layout/AppShell';
import { Home } from '@/src/pages/Home';

export default function App() {
  return (
    <AppShell>
      <Home />
    </AppShell>
  );
}
