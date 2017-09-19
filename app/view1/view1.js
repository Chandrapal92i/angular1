'use strict';

angular.module('myApp.view1', [])
.controller('View1Ctrl', ['$scope', 
                          'viewFactory',
                          function($scope,
                                   viewFactory) {
  // scope details which is bind to view.
  $scope.detailList = [];
  /** 
   * This function used to trigger on init of the page to 
   * fetch the details by invoking http service.
   */
   $scope.fetchDetailList = function () {
        viewFactory.fetchDetailList().then(function(responseData){
            if (responseData.data.length > 0) {
                // bind to scope.
                $scope.detailList = responseData.data;
                // sorting configuration
                $scope.orderByField = 'name';
                $scope.reverseSort = false;
            }
        });
    }
    
}]);