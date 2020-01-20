module.exports = {
  test: /\.(js|jsx|mjs)$/,
  loader: require.resolve("babel-loader"),
  options: {
    babelrc: false,
    compact: false,
    presets: [require.resolve("babel-preset-react-app/dependencies")],
    cacheDirectory: true
  }
};
