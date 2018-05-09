(function(angular) {
    'use strict';
    // angular.module("Child1Module", [])
    //     .controller('Child1Controller', ['$scope', 'child1DataService', function($scope, child1DataService) {
    //         $scope.data = { "name": "shekharc1" }; // show scope access by commenting this line
    //     }])
    angular.module("Child1Module", ['Child2Module'])
        .controller('Child1Controller', ['$scope', 'child1DataService', function($scope, child1DataService) {
            $scope.data = { "name": "shekharc1" }; // show scope access by commenting this line
        }])
        .factory('child1DataService', function() {
            var parentData = [{ name: "raghuc1", company: "tricon" }, { name: "shekharc1", company: "tricon" }]
            return parentData;
        });
})(window.angular);