var myServiceCtrls = angular.module("myServiceCtrls",[]);

myServiceCtrls.factory('bookLists',function ($http) {
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
        }
    }
});