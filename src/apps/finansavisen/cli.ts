export interface NewsArticle {
  title: string;
  url: string;
}

export async function fetchFinansavisenNews(): Promise<NewsArticle[]> {
  const response = await fetch('https://finansavisen.no');
  const html = await response.text();

  const articles: NewsArticle[] = [];

  const linkPattern = /<a[^>]+href=["']([^"']+)["'][^>]*>([^<]+)<\/a>/gi;
  const matches = html.matchAll(linkPattern);

  for (const match of matches) {
    const href = match[1];
    const title = match[2].trim();

    // Be more permissive but still filter out obvious non-news
    if (
      title &&
      href &&
      title.length > 3 &&
      !href.includes('javascript:') &&
      !href.includes('mailto:') &&
      !href.includes('/stillinger/') && // Exclude job listings
      !href.includes('ocast.com') && // Exclude external ad links
      !title.startsWith('Kjøp ') // Exclude buy ads
    ) {
      const url = href.startsWith('http') ? href : `https://finansavisen.no${href}`;
      articles.push({ title, url });
    }
  }

  // Remove duplicates and return first 20
  const uniqueArticles = articles.filter((article, index, self) => 
    index === self.findIndex(a => a.url === article.url)
  );

  return uniqueArticles.slice(0, 20);
}
