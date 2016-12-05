var bookListCtrl = angular.module('bookListCtrl',[]);

bookListCtrl.controller('bookListCtrl', [
    '$scope',
    '$http',
    '$q',
    'bookLists',
    function ($scope,$http,$q,bookLists) {
        // 同步调用，获得承诺接口
        // 调用承诺API获取数据 .resolve,错误 .reject
        // bookList.getData().then(回调函数)
        var items = bookLists.getData('GET','../book_list/index.json');
        items.then(function (data) {
            $scope.items = data.books;
        },function () {
            console.log('error');
        });

    }
]);