const mongoose = require('mongoose');

const SitemapSchema = new mongoose.Schema({
    website: String,
    pages: [
        {
            url: String,
            links: [String],
        },
    ],
});

const Sitemap = mongoose.model('Sitemap', SitemapSchema);

module.exports = Sitemap;
