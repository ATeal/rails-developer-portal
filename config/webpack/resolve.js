const fs = require("fs");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: resolveApp("tsconfig.json")
      })
    ]
  }
};
