/**
 * 由于$http异步执行，导致页面加载时，未获取到数据
 * $q
 * promise/deferred (承诺/延迟)
 *
 */

angular
    .module("bookListService",[])
    .factory('bookLists',function ($http,$q) {
        return {

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

            getDetail: function (url,config) {
                var deferred = $q.defer();
                $http.get(url)
                .then(function (resp) {
                    angular.forEach(resp.data.books, function (book) {
                        if (book.id == config) return deferred.resolve(book);
                    });
                }, function (resp) {
                    deferred.reject(resp.data);
                });
                return deferred.promise;
            }

        }
    });