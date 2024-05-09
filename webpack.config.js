const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: 'src/**/*.d.ts', 
          to() {
            return '[name][ext]';
          }
        }
      ],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
