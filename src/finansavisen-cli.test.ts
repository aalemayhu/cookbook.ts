import { test, describe } from 'node:test';
import assert from 'node:assert';
import { fetchFinansavisenNews } from './finansavisen-cli.ts';

describe('finansavisen-cli', () => {
  test('should fetch top news from finansavisen.no', async () => {
    const news = await fetchFinansavisenNews();
    
    assert(news !== undefined);
    assert(Array.isArray(news));
    assert(news.length > 0);
    
    const firstArticle = news[0];
    assert(typeof firstArticle.title === 'string');
    assert(typeof firstArticle.url === 'string');
    assert(firstArticle.title.length > 0);
    assert(firstArticle.url.length > 0);
  });
});
