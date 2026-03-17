import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/src/components/layout/AppShell';

export const metadata: Metadata = {
  title: 'Acadivate',
  description: 'Acadivate Research & Innovation Foundation website converted to Next.js',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
