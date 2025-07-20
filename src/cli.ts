#!/usr/bin/env node

import { fetchFinansavisenNews } from './finansavisen-cli.ts';

async function main() {
  try {
    console.log('Fetching top news from Finansavisen...\n');
    const news = await fetchFinansavisenNews();

    if (news.length === 0) {
      console.log('No news articles found.');
      return;
    }

    news.slice(0, 10).forEach((article, index) => {
      console.log(`${index + 1}. ${article.title}`);
      console.log(`   ${article.url}\n`);
    });

    console.log(`Found ${news.length} articles total.`);
  } catch (error) {
    console.error('Error fetching news:', error);
    process.exit(1);
  }
}

main();
