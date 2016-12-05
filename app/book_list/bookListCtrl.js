var bookListCtrl = angular.module('bookListCtrl',[]);

bookListCtrl.controller('bookListCtrl', [
    '$scope',
    '$q',
    'bookLists',
    function ($scope,$q,bookLists) {
        // 同步调用，获得承诺接口
        // 调用承诺API获取数据 .resolve,错误 .reject
        // bookList.getData().then(回调函数)
        var items = bookLists.getData('GET','../book_list/index.json');
        items.then(function (data) {
            $scope.items = data.books;
        },function () {
            console.log('error');
        });


        var id = 11;
        $scope.addItem = function () {
            var item = {
                id: id ++,
                name: $scope.newName,
                price: $scope.newPrice
            };
            $scope.items.push(item);
            $scope.newName = '';
            $scope.newPrice = '';
        };
        
        $scope.delItem = function (item) {
            $scope.items.splice($scope.items.indexOf(item), 1)
        }
    }
]);