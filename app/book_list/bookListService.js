var bookListService = angular.module("bookListService",[]);

bookListService.factory('bookLists',function ($http,$q) {
    return {

        // 由于$http异步执行，导致页面加载时，未获取到数据
        // 解决方法就是
        // $q
        // promise/deferred (承诺/延迟)

        getData: function (method,url) {
            // 声明延后执行，表示要去监控后面读执行
            var deferred = $q.defer();

            $http({
                method: method,
                url: url
            }).then(function (resp) {
                // 声明执行成功，即http请求数据成功，可以返回数据了
                deferred.resolve(resp.data);
            }, function (resp) {
                // 声明执行失败，即服务器返回错误
                deferred.reject(resp.data);
            });
            // 返回承诺，这里并不是最终数据，而是访问最终数据的API
            return deferred.promise;
        },

    }
});