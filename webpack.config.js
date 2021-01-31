const path = require('path');

module.exports = {
  name: 'webgl-example',
  entry: ['babel-polyfill', './src/index.ts'],
  output: {
    filename: 'webgl-example.js',
    path: path.resolve(__dirname + '/dist'),
    library: 'webglexample',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.glsl$/,
        use: ['raw-loader'],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: '/node_modules',
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      webglexample: __dirname,
    },
    extensions: ['.ts', '.js', '.json'],
  },
};
