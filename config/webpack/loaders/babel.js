module.exports = {
  test: /\.(js|jsx|mjs)$/,
  loader: require.resolve("babel-loader"),
  options: {
    compact: true
  }
};
