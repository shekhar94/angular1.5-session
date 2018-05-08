(function(angular) {
    'use strict';
    angular.module("directiveDemo", [])
        .controller('Controller', ['$scope', function($scope) {
            $scope.customer = {
                name: "shekhar"
            };
            $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
            $scope.igor = { name: 'Igor', address: '123 Somewhere' };
            $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };
        }])
        .directive('tplDir1', function() { // factory function returns an object
            return {
                template: 'shekhar',
            };
        })
        .directive('tplDir2', function() {
            return {
                templateUrl: function(elem, attr) {
                    return 'customer-' + attr.type + '.html';
                }
            };
        })
        .directive('tplDir3', function() {
            return {
                restrict: 'E',
                templateUrl: function(elem, attr) {
                    return 'customer-' + attr.type + '.html';
                }
            };
        })
        .directive('tplDir5', function() {
            return {
                restrict: 'E',
                scope: {
                    customerInfo: '=info'
                },
                templateUrl: 'my-customer-iso.html'
            };
        })
        .directive('tplDir6', function() {
            return {
                restrict: 'A',
                link: function(scope, element, attrs, controller, transcludeFn) {
                    document.getElementById('fourth').addEventListener('keydown', function(event) {
                        if (event.keyCode === 9) { // tab
                            document.getElementById('first').focus();
                            event.stopPropagation();
                            event.preventDefault();
                        }
                    });
                }
            };
        });
})(window.angular);