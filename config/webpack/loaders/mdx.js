module.exports = {
  test: /\.mdx$/,
  use: [
    "babel-loader",
    {
      loader: "markdown-component-loader",
      options: {
        enabledMarkdownItRules: ["smartquotes", "table"],
        markdownItPlugins: [[require("markdown-it-anchor"), { level: 2 }]]
      }
    }
  ]
};
