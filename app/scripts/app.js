'use strict';

/**
 * @ngdoc overview
 * @name jetfuelAngularApp
 * @description
 * # jetfuelAngularApp
 *
 * Main module of the application.
 */
angular
  .module('jetfuelAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/analytics', {
        templateUrl: 'views/analytics.html',
        controller: 'AnalyticsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });