(function(angular) {
    'use strict';
    angular.module("Child2Module", [])
        .controller('Child2Controller', ['$scope', 'child2DataService', function($scope, child2DataService) {
            // $scope.data = { "name": "shekharc2" };
        }])
        .factory('child2DataService', function() {
            var parentData = [{ name: "raghuc2", company: "tricon" }, { name: "shekharc2", company: "tricon" }]
            return parentData;
        });
})(window.angular);