(function(angular) {
    'use strict';
    angular.module("FormModule", [])
        .controller('FormController', ['$scope', function($scope, parentDataService) {
            $scope.user = {
                "name": "",
                "email": "",
                "company": ""
            };
        }]);
})(window.angular);