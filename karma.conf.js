// Karma configuration
// Generated on Mon Aug 19 2013 13:06:32 GMT+1000 (EST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      JASMINE,
      JASMINE_ADAPTER,

      'app/bower_components/jquery/jquery.js',
      'app/bower_components/angular/angular.js',

      'app/bower_components/bootstrap-sass/js/bootstrap-affix.js',
      'app/bower_components/bootstrap-sass/js/bootstrap-alert.js',
      'app/bower_components/bootstrap-sass/js/bootstrap-dropdown.js',
      'app/bower_components/bootstrap-sass/js/bootstrap-tooltip.js',
      'app/bower_components/bootstrap-sass/js/bootstrap-modal.js',
      'app/bower_components/bootstrap-sass/js/bootstrap-transition.js',
      'app/bower_components/bootstrap-sass/js/bootstrap-button.js',
      'app/bower_components/bootstrap-sass/js/bootstrap-popover.js',
      'app/bower_components/bootstrap-sass/js/bootstrap-typeahead.js',
      'app/bower_components/bootstrap-sass/js/bootstrap-carousel.js',
      'app/bower_components/bootstrap-sass/js/bootstrap-scrollspy.js',
      'app/bower_components/bootstrap-sass/js/bootstrap-collapse.js',
      'app/bower_components/bootstrap-sass/js/bootstrap-tab.js',

      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',

      'app/scripts/app.js',
      'app/scripts/controllers/main.js',

      'test/spec/controllers/main.js'
    ],


    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
