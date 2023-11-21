const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scrapedDataSchema = new Schema({
  url: String,
  inboundLinks: [
    {
      url: String,
      title: String,
    },
  ],
  outboundLinks: [
    {
      url: String,
      title: String,
    },
  ],
  images: [
    {
      url: String,
      alt: String,
      dimensions: {
        width: Number,
        height: Number,
      },
      type: String,
    },
  ],
  text: {
    type: Map,
    of: [String],
  },
  sections: {
    main: {
      type: Map,
      of: [String],
    },
    sidebar: {
      type: Map,
      of: [String],
    },
    footer: {
      type: Map,
      of: [String],
    },
  },
  metadata: {
    title: String,
    description: String,
    keywords: [String],
  },
});

module.exports = mongoose.model("ScrapedData", scrapedDataSchema);
