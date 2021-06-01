import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Configuration, Plugin, Entry } from 'webpack';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
// eslint-disable-next-line import/no-extraneous-dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// eslint-disable-next-line import/no-extraneous-dependencies
import CompressionPlugin from 'compression-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import { IS_DEV, DIST_DIR, SRC_DIR, STATIC_DIR} from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';
import tsLoader from './loaders/ts';

const config: Configuration = {
  entry: ([
    IS_DEV && 'react-hot-loader/patch',
    // IS_DEV && 'webpack-hot-middleware/client',
    IS_DEV && 'css-hot-loader/hotModuleReplacement',
    path.join(SRC_DIR, 'client'),
  ].filter(Boolean) as unknown) as Entry,
  module: {
    rules: [fileLoader.client, cssLoader.client, jsLoader.client, tsLoader.server],
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: { 'react-dom': '@hot-loader/react-dom' },
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/theme', to: './static/theme' },
      ]
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    !IS_DEV && new CompressionPlugin(),
  ].filter(Boolean) as Plugin[],

  devtool: 'source-map',

  performance: {
    hints: IS_DEV ? false : 'warning',
  },
};

export default config;
