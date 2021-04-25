import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Configuration } from 'webpack';
// eslint-disable-next-line import/no-extraneous-dependencies
import nodeExternals from 'webpack-node-externals';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import { IS_DEV, DIST_DIR, SRC_DIR } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';
import tsLoader from './loaders/ts';

const config: Configuration = {
  name: 'server',
  target: 'node',
  node: { __dirname: false },
  entry: path.join(SRC_DIR, 'server'),
  module: {
    rules: [fileLoader.server, cssLoader.server, jsLoader.server, tsLoader.server],
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR,
    publicPath: '/static/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      actions: path.resolve(__dirname, './src/actions/'),
      components: path.resolve(__dirname, './src/components/'),
      consts: path.resolve(__dirname, './src/consts/'),
      decorators: path.resolve(__dirname, './src/decorators/'),
      reducers: path.resolve(__dirname, './src/reducers/'),
      store: path.resolve(__dirname, './src/store/'),
      styles: path.resolve(__dirname, './src/styles/'),
      pages: path.resolve(__dirname, './src/pages/'),
      assets: path.resolve(__dirname, './src/assets/'),
      types: path.resolve(__dirname, './src/types/'),
      utils: path.resolve(__dirname, './src/utils/'),
    },
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },

  devtool: 'source-map',

  performance: {
    hints: IS_DEV ? false : 'warning',
  },

  externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],

  optimization: { nodeEnv: false },
};

export default config;
