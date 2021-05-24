export default {
  client: {
    test: /\.ts(x?)$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
  server: {
    test: /\.ts(x?)$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
};
