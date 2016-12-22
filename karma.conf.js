module.exports = config => {

  config.set({

    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [{
      pattern: './test/dist/test.js',
      watched: true,
      served: true,
      included: true
    }]
  })
}
