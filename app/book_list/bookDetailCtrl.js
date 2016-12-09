angular
    .module('bookDetailModule',[])
    .controller('bookDetailCtrl', [
        '$scope',
        '$stateParams',
        'bookLists',
        function ($scope, $stateParams, bookLists) {
            var item = bookLists.getDetail('../book_list/data.json', $stateParams.bookId);
            item.then(function (data) {
                $scope.item = data;
            },function () {
                console.log('book detail error...');
            });

            this.save = function () {

            }
    }]);