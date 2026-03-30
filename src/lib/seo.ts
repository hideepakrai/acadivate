export async function getSEO(slug: string) {
  try {
    console.log("fetching from:", `${process.env.NEXT_PUBLIC_API_URL}/api/pages`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pages`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("fetch failed with status:", res.status);
      return {
        metaTitle: "Default Title",
        metaDescription: "Default description",
      };
    }

    const data = await res.json();
    console.log("data received, pages count:", data.pages?.length);
    const pages = data.pages || [];
    const page = pages.find((item: any) => item.slug === slug);

    if (!page) {
      console.log("page not found for slug:", slug);
      return {
        metaTitle: "Default Title",
        metaDescription: "Default description",
      };
    }

    console.log("page found, returning seo:", page.seo);
    return page.seo;
  } catch (error: any) {
    console.error("DEBUG ERROR in getSEO:", error.message);
    return {
      metaTitle: "Default Title",
      metaDescription: "Default description",
    };
  }
}