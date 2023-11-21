const {PythonShell} = require('python-shell');
const readline = require('readline');
const Sitemap = require('./sitemapModel');

const runSitemapSpider = async () => {
    return new Promise((resolve, reject) => {
        const pyShell = new PythonShell('sitemap_spider.py', {pythonOptions: ['-u']});
        const sitemapData = {
            website: 'https://www.example.com',
            pages: [],
        };

        readline.createInterface({
            input: pyShell.stdout,
            terminal: false,
        }).on('line', (line) => {
            try {
                const data = JSON.parse(line);
                sitemapData.pages.push(data);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        });

        pyShell.end(async (err) => {
            if (err) {
                reject(err);
            } else {
                const sitemap = new Sitemap(sitemapData);
                await sitemap.save();
                resolve();
            }
        });
    });
};

(async () => {
    try {
        await runSitemapSpider();
        console.log('Sitemap saved to MongoDB');
    } catch (error) {
        console.error('Error:', error);
    }
})();
