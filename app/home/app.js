var myApp = angular.module('myApp',[
    'ngRoute','myStoreCtrls','helloCtrls','myServiceCtrls'
]);

myApp.config(function ($routeProvider,$locationProvider) {
    // 使用html5路由
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/',{
        templateUrl: '../book_list/index.html',
        controller: 'IndexCtrl'
    }).when('/hello', {
        templateUrl: '../hello/hello.html',
        controller: 'HelloCtrl'
    }).otherwise({
        redirectTo: '/'
    });
})
    .run(function ($rootScope,$location) {
        $rootScope.path = $location.path();

        $rootScope.$on('$routeChangeSuccess',function () {
            $rootScope.path = $location.path();
        })
    });