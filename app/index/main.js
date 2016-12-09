/**
 * @link http://angular-ui.github.com/
 *
 *
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 *
 * <div ui-view="viewName"></div>
 *
 * <div ui-view="main"></div>
 * $stateProvider.state("home", {
 *   views: {
 *     "main": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }
 * })
 *
 * viewname@statename
 * 如: 'topbar@index'
 *
 *
 * 两种controller映射方式：
 * 页面定义： <div ng-controller="controllerName"/>
 * 在路由中指定： controller: 'controllerName'
 *
 *
 * 监听路由变化：
 * 获取当前路由名称： $state.current.name => 'index.books.list'
 * 获取当前地址栏中的path： $location.path() => '/index/books/list'
 */

angular
    .module('myApp',[
        'ui.router',
        'helloComponent',
        'bookListService','bookListModule','bookDetailModule',
        'aboutModule'
    ])
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
        $stateProvider
            .state('index',{
                url: '/index',
                views: {
                    '': {
                        templateUrl: '../common/container.html'
                    },
                    'topbar@index': {
                        templateUrl: '../common/topbar.html'
                    },
                    'main@index': {
                        templateUrl: '../home/home.html'
                    }
                }

            })
            .state('index.books',{
                url: '/books',
                views: {
                    'main@index': { // for "ui-view='main'"
                        templateUrl: '../book_list/books.html'
                    }
                }
            })
            .state('index.books.list',{
                url: '/list',
                templateUrl: '../book_list/list.html',
                controller: 'bookListCtrl'
            })
            .state('index.books.detail',{
                url: '/:bookId',
                templateUrl: '../book_list/detail.html'
            })
            .state('index.books.hello',{
                url: '/hello',
                templateUrl: '../hello/hello.html'
            })
            .state('index.about',{
                url: '/about',
                views: {
                    'main@index': {
                        templateUrl: '../about/about.html'
                    }
                }
            })
    })
    .run([
        '$rootScope',
        '$location',
        '$state',
        function ($rootScope, $location, $state) {
            $rootScope.$on('$stateChangeSuccess', function () {
                if ( $location.path() == '/index/books') return $state.go('index.books.list');
                $rootScope.path = $location.path();
            })
        }
    ])
;