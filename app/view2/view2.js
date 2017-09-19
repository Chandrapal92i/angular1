'use strict';

angular.module('myApp.view2', []) .controller('View2Ctrl', ['$filter',
                                                            '$scope', 
                                                            'viewFactory', function($filter,
                                                                                     $scope,
                                                                                     viewFactory) {
                                                                
  $scope.processList = [];
  /** 
   * This function used to trigger on init of the page to 
   * fetch the details by invoking http service, if data found 
   * then invoke private function to process json.
   */
    $scope.processList = function () {
        viewFactory.fetchDetailList().then(function(responseData){
            if (responseData.data.length > 0) {
                // bind to scope.
               $scope.processList = _processJsonList(responseData.data);
            }
        });
    }
    
    /**
     * This function used to process the response json grouping by name.
     **/
    function _processJsonList (dataList) {
        var filterData = {};
        var processData = [];
        var test = dataList;
        angular.forEach(dataList,function(value, index){
            var filterObject = {};
            // verify the same name is existing in the object.
            var existingValue = $filter('filter')(processData, {name: dataList[index].name});
            if (existingValue.length === 0){
                filterObject = $filter('filter')(test, {name: dataList[index].name});    
                filterData = {};
                filterData.name = dataList[index].name;
                filterData.amountC1 = "-";
                filterData.amountC2 = "-";
                filterData.amountC3 = "-";
                for (var i=0; i<filterObject.length;i++) {
                    if(filterObject[i].category == "C1") {
                        filterData.amountC1 = filterObject[i].amount;
                    } else if(filterObject[i].category == "C2") {
                        filterData.amountC2 = filterObject[i].amount;
                    } else if(filterObject[i].category == "C3") {
                        filterData.amountC3 = filterObject[i].amount;
                    }
                }        
                // push into array
                processData.push(filterData);
            }
        });
        return $filter('orderBy')(processData, 'name');
    }
}]);