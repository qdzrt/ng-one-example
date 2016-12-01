var myStoreCtrl = angular.module('myStoreCtrl',[]);

myStoreCtrl.controller('HomeCtrl',function ($scope,$location) {
    $scope.path = $location.path();
});