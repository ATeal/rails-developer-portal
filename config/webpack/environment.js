const { environment } = require("@rails/webpacker");
const babel = require("./loaders/babel");
const babelDependencies = require("./loaders/babel-dependencies");
const typescript = require("./loaders/typescript");
const mdx = require("./loaders/mdx");
const yml = require("./loaders/yml");
const resolves = require("./resolve");
const custom = require("./custom");

// environment.loaders.prepend("babel", babel);
// environment.loaders.prepend("babelDependencies", babelDependencies);
// environment.loaders.prepend("typescript", typescript);
// environment.loaders.prepend("mdx", mdx);
// environment.loaders.prepend("yml", yml);
environment.config.merge(custom);
module.exports = environment;
