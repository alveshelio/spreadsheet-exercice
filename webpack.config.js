const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const loadPresets = require('./build-utils/loadPresets');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => webpackMerge(
  {
    entry: './src/index.tsx',
    mode,
    output: {
      filename: 'bundle.js',
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.jpe?g/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5000,
              }
            }
          ],
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({
      title: 'Spreadsheet',
      template: './public/index.html',
      filename: './index.html'
    }), new webpack.ProgressPlugin()]
  },
  modeConfig(mode),
  loadPresets({ mode, presets }),
);
