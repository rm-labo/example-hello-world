import path from 'path'
const mode = process.env.NODE_ENV

module.exports = {
  mode: mode,
  entry: './src/js/index.js',
  output: {
    path: `${__dirname}/dist/js`,
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    useBuiltIns: 'usage',
                    // 'useBuiltIns': 'entry',
                    debug: true,
                    targets: {
                      ie: 11
                    },
                    forceAllTransforms: true,
                    corejs: 3
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  }
}
