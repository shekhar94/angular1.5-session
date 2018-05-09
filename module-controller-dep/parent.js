(function(angular) {
    'use strict';
    // angular.module("ParentModule", ['Child1Module', 'Child2Module'])
    //     .controller('ParentController', ['$scope', 'parentDataService', function($scope, parentDataService) {
    //         $scope.data = { "name": "shekhar" };
    //     }])
    angular.module("ParentModule", ['Child1Module'])
        .controller('ParentController', ['$scope', 'parentDataService', function($scope, parentDataService) {
            $scope.data = { "name": "shekhar" };
        }])
        .factory('parentDataService', function() {
            var parentData = [{ name: "raghu", company: "tricon" }, { name: "shekhar", company: "tricon" }]
            return parentData;
        });

})(window.angular);