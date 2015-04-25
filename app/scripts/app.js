'use strict';

/**
 * @ngdoc overview
 * @name kProjectApp
 * @description
 * # kProjectApp
 *
 * Main module of the application.
 */
angular
    .module('kProjectApp', [
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
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/MonitorDetail', {
                templateUrl: 'views/MonitorDetail.html',
                controller: 'MonitorDetailCtrl'
            })
            .when('/EventDataRecord', {
                templateUrl: 'views/EventDataRecord.html',
                controller: 'EventDataRecordCtrl'
            })
            .when('/DigitalVideo', {
                templateUrl: 'views/DigitalVideo.html',
                controller: 'DigitalVideoCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });