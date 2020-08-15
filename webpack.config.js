const path = require("path")
const mode = process.env.NODE_ENV
// cosnt nodeModulesPath = path.join(__dirname, 'node_modules')

module.exports = {
  mode: mode,
  entry: './src/ts/index.ts',
  output: {
    path: `${__dirname}/dist/js`,
    filename: "index.js"
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      { test: /\.ts/, exclude: /node_modules/, loaders: ['ts-loader']}
    ]
  }
}