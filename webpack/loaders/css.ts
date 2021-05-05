const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const postcssNested = require('postcss-nested');
// eslint-disable-next-line import/no-extraneous-dependencies
const postcssCustomMedia = require('postcss-custom-media');
// eslint-disable-next-line import/no-extraneous-dependencies
const postcssImport = require('postcss-import');
// eslint-disable-next-line import/no-extraneous-dependencies
const postcssImportAliasResolver = require('postcss-import-alias-resolver');
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const cssnano = require('cssnano');

const { IS_DEV } = require('../env');

const resolverOptions = {
  alias: { styles: path.resolve('src/styles') },
  mergeExtensions: 'extend',
};

export default {
  client: {
    test: /\.css$/,
    use: [
      IS_DEV && 'css-hot-loader',
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            postcssImport({
              resolve: postcssImportAliasResolver(resolverOptions),
            }),
            postcssCustomMedia(),
            postcssNested(),
            !IS_DEV && cssnano({ preset: 'default' }),
          ].filter(Boolean),
        },
      },
    ].filter(Boolean),
  },
  server: {
    test: /\.css$/,
    loader: 'null-loader',
  },
};
