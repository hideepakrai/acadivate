import { Home } from '@/src/pages/Home';
import { getSEO } from '@/src/lib/seo';

export async function generateMetadata() {
  const seo = await getSEO('home');

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
  };
}

export default function Page(){ return <Home />; }
