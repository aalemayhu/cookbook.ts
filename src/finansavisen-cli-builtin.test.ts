import { fetchFinansavisenNewsBuiltin } from './finansavisen-cli-builtin.js';

describe('finansavisen-cli-builtin', () => {
  it('should fetch top news from finansavisen.no using only builtin APIs', async () => {
    const news = await fetchFinansavisenNewsBuiltin();

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
