'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.factory',
  'myApp.constant'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.when('/detailList', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  }).when('/processJSON', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
  $routeProvider.otherwise({redirectTo: '/detailList'});
}]);
