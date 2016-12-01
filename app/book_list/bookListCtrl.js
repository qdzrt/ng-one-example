var myStoreCtrls = angular.module('myStoreCtrls',[]);

myStoreCtrls.controller('IndexCtrl', [
    '$scope',
    '$timeout',
    'bookLists',
    function ($scope,$timeout,bookLists) {
        var lists = bookLists.getItems();
        if (lists.success) {
            lists.success(function() {
                $timeout(function() {
                    $scope.lists = bookLists.getItems();
                });
            });
        } else {
            $scope.lists = lists;
        }
}]);