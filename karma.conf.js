module.exports = config => {

  config.set({

    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai', 'sinon'],
    files: ['./node_modules/babel-polyfill/dist/polyfill.js', {
      pattern: './test/dist/test.js',
      watched: true,
      served: true,
      included: true
    }]
  })
}
