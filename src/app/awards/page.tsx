import { Awards } from '@/src/pages/Awards';
import { getSEO } from '@/src/lib/seo';

export async function generateMetadata() {
  const seo = await getSEO('awards');

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
  };
}
export default function Page(){ return <Awards />; }
