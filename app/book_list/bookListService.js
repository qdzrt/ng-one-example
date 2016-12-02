var bookListService = angular.module("bookListService",[]);

bookListService.factory('bookLists',function ($http, $timeout) {
    var allItems, defer;
    return {
        getItems: function () {
            if (allItems) return allItems;
            if (!defer) {
                defer = $http.get('../data/index.json');
                defer.success(function (res) {
                    allItems = res;
                    defer = null;
                });
            }

            return defer;
        },

        addItem: function (item, callback) {
            $timeout(function () {
                var res = {};
                callback(res);
            }, 300);
        }
    }
});