angular
    .module("bookListService",[])
    .factory('bookLists',function ($http,$q) {
        return {
            // 由于$http异步执行，导致页面加载时，未获取到数据
            // $q
            // promise/deferred (承诺/延迟)
            getData: function (method,url) {
                var deferred = $q.defer();
                $http({
                    method: method,
                    url: url
                }).then(function (resp) {
                    deferred.resolve(resp.data);
                }, function (resp) {
                    deferred.reject(resp.data);
                });
                return deferred.promise;
            },

        }
    });