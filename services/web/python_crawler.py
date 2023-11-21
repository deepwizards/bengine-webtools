import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
import json
import sys
import logging

class SitemapSpider(CrawlSpider):
    name = 'sitemap_spider'
    start_urls = ['https://www.example.com']

    rules = (
        Rule(LinkExtractor(allow_domains=start_urls[0]), callback='parse_item', follow=False),
    )

    custom_settings = {
        'DOWNLOAD_DELAY': 0.5,
        'ROBOTSTXT_OBEY': True,
        'CLOSESPIDER_PAGECOUNT': 1000,
    }

    def parse_item(self, response):
        data = {
            'url': response.url,
            'links': [link.url for link in LinkExtractor(allow_domains=self.start_urls[0]).extract_links(response)],
        }
        sys.stdout.write(json.dumps(data) + '\n')
        sys.stdout.flush()

def main():
    from scrapy.crawler import CrawlerProcess
    from scrapy.utils.project import get_project_settings

    logging.basicConfig(filename='scrapy.log', level=logging.INFO)

    settings = get_project_settings()
    settings.set('USER_AGENT', 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)')

    process = CrawlerProcess(settings)
    process.crawl(SitemapSpider)
    process.start()

if __name__ == '__main__':
    main()
