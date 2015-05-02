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
    'lbServices',
    'ngSanitize',
    'ngTouch',
  ])
    .config(function ($provide, $routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/MonitorDetail/', {
                templateUrl: 'views/MonitorDetail.html',
                controller: 'MonitorDetailCtrl'
            })
            .when('/EventDataRecord/', {
                templateUrl: 'views/EventDataRecord.html',
                controller: 'EventDataRecordCtrl'
            })
            .when('/DigitalVideo/', {
                templateUrl: 'views/DigitalVideo.html',
                controller: 'DigitalVideoCtrl'
            })
            .when('/CameraList/', {
                templateUrl: 'views/CameraList.html',
                controller: 'CameraListCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });