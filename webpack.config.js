module.exports = {

  entry: {
    test: './test/index.test.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel?cacheDirectory',
        test: /\.js$/,
        include: /(test)/
      }
    ]
  }
}
