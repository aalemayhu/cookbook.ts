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

    if (
      title &&
      href &&
      !href.includes('javascript:') &&
      !href.includes('mailto:')
    ) {
      const url = href.startsWith('http')
        ? href
        : `https://finansavisen.no${href}`;
      articles.push({ title, url });
    }
  }

  return articles.slice(0, 20);
}
