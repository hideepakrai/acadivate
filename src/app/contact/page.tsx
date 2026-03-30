import { Contact } from '@/src/pages/Contact';
import { getSEO } from '@/src/lib/seo';

export async function generateMetadata() {
  const seo = await getSEO('contact');

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
  };
}

export default function Page(){ return <Contact />; }
