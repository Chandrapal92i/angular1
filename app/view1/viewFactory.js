'use strict';

angular.module('myApp.factory', [])
.factory('viewFactory', ['$http',
                         'viewConstants',
                         function($http,
                                  viewConstants) {
  var factory = {};
  
  factory.fetchDetailList = function () {
      return $http.get(viewConstants.STUBDATA_URL);
  }
  
  return factory;
    
}]);