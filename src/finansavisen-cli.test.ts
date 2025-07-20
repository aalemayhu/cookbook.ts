import { fetchFinansavisenNews } from './finansavisen-cli.js';

describe('finansavisen-cli', () => {
  it('should fetch top news from finansavisen.no', async () => {
    const news = await fetchFinansavisenNews();

    expect(news).toBeDefined();
    expect(Array.isArray(news)).toBe(true);
    expect(news.length).toBeGreaterThan(0);

    const firstArticle = news[0];
    expect(firstArticle).toHaveProperty('title');
    expect(firstArticle).toHaveProperty('url');
    expect(firstArticle.title).toBeTruthy();
    expect(firstArticle.url).toBeTruthy();
  });
});
