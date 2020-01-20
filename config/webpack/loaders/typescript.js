const PnpWebpackPlugin = require("pnp-webpack-plugin");

module.exports = {
  test: /\.(ts|tsx)$/,
  use: [
    {
      loader: "ts-loader",
      options: PnpWebpackPlugin.tsLoaderOptions({
        transpileOnly: true
      })
    }
  ]
};
