var app = angular.module('myApp', []);
app.controller('LoginController', function($scope) {
    // var vm = this;
    $scope.email = '';
    $scope.password = '';
    $scope.errorMessage = '';
    $scope.login = function() {
        $scope.errorMessage = '';
        if ($scope.email === 'hmesrar@ez7mz.me' && $scope.password === 'hamza123') {
            $scope.errorMessage = 'valid'
        } else {
            $scope.errorMessage = 'error';
        }
    };
});