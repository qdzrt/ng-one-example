var bookListCtrl = angular.module('bookListCtrl',[]);

bookListCtrl.controller('bookListCtrl', [
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


        var id = 11;
        $scope.addNewItem = function () {
            if (!$scope.newName) return;
            var item = {
                id: id++,
                name: $scope.newName,
                price: $scope.newPrice
            };

            bookLists.addItem(item, function () {
                $scope.lists.push(item);
                $scope.newName='';
                $scope.newPrice='';
            })
        }
}]);