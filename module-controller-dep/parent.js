(function(angular) {
    'use strict';
    // angular.module("ParentModule", ['Child1Module', 'Child2Module'])
    //     .controller('ParentController', ['$scope', 'parentDataService', function($scope, parentDataService) {
    //         $scope.data = { "name": "shekhar" };
    //     }])
    angular.module("ParentModule", ['Child1Module'])
        .controller('ParentController', ['$scope', 'parentDataService', function($scope, parentDataService) {
            $scope.data = { "name": "shekhar" };
            $scope.names = ['raghu', 'shekhar'];
            $scope.showAlert = function () {
                return "shekharVal";
            }
        }])
        .factory('parentDataService', function() {
            var parentData = [{ name: "raghu", company: "tricon" }, { name: "shekhar", company: "tricon" }]
            return parentData;
        })
        .filter('toupper', function(data) {
            return data.toUpperCase();
        });

})(window.angular);