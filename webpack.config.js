const path = require('path');

module.exports = {
  name: 'webgl-example',
  entry: ['babel-polyfill', './src/index.ts'],
  output: {
    filename: 'webgl-example.bundle.js',
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
        use: ['shader-loader'],
      },
      {
        test: /\.(js|ts)$/,
        exclude: '/node_modules',
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'webgl-example': __dirname,
    },
    extensions: ['.ts', '.js', '.json'],
  },
};
