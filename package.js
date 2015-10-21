Package.describe({
  name: 'dude-awap:dummy',
  version: '0.0.6',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
});

Package.onTest(function(api) { // NOTEST
  api.use('ecmascript');
  api.use('tinytest');
});
