// css
require('./assets/lib/bootstrap/less/bootstrap.less');
require('./assets/css/style.css');

// Polyfills
import 'es6-shim';
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)
import 'es6-promise';
import 'zone.js/lib/browser/zone-microtask';

if ('production' !== process.env.ENV) {
  // Reflect Polyfill
  require('es7-reflect-metadata/dist/browser');
  Error['stackTraceLimit'] = Infinity;
  Zone['longStackTraceZone'] = require('zone.js/lib/zones/long-stack-trace.js');
}

if ('production' === process.env.ENV) {
  // Reflect with es7-reflect-metadata/reflect-metadata is added
  // by webpack.prod.config ProvidePlugin
  let ngCore = require('angular2/core');
  ngCore.enableProdMode();
}
// Angular 2
import 'angular2/platform/browser';
import 'angular2/platform/common_dom';
import 'angular2/router';
import 'angular2/http';
import 'angular2/core';

// RxJS
import 'rxjs';

// Other vendors for example jQuery, Lodash, angular2-jwt
require('./assets/lib/bootstrap/jquery-1.11.3.min.js');
require('imports?jQuery=jquery!./assets/lib/bootstrap/bootstrap.min.js');
