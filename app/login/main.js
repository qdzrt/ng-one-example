var myApp = angular.module('myApp',[]);
myApp.controller('LoginCtrl',function ($scope,$timeout) {
    $scope.email = 'liulian@163.com';
    $scope.password = '123456';
    $scope.submit = function () {
        $timeout(function () {
            location.href = '../home/';
        }, 300)
    };
});