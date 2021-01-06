const postcssImport = require("postcss-import");
const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const plugins =
  process.env.NODE_ENV === "production"
    ? [postcssImport, tailwind, autoprefixer, cssnano]
    : [postcssImport, tailwind, autoprefixer];

module.exports = { plugins };
