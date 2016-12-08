angular
    .module('myApp',[
        'ui.router',
        'helloCom',
        'bookListMod','bookListService',
        'aboutMod'
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
                    // viewname@statename
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
                    'main@index': {
                        templateUrl: '../book_list/books.html'
                    }
                }
            })
            .state('index.books.list',{
                url: '/list',
                templateUrl: '../book_list/list.html',
                // 两种controller映射方式：
                // 一： 页面定义ng-controller="bookListCtrl"
                // 二： router指定controller(如下)
                controller: 'bookListCtrl'
            })
            .state('index.books.detail',{
                url: '/{bookId:[0-9]{1,4}}',
                templateUrl: '../book_list/detail.html',
                controller: function ($stateParams) {
                    console.log($stateParams.bookId)
                }
            })
            .state('index.books.hello',{
                url: '/hello',
                templateUrl: '../hello/hello.html'
            })
            .state('index.about',{
                url: '/about',
                views: { // for "ui-view='main'"
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
                if ($location.path() == '/index/books') return $state.go('index.books.list');
                $rootScope.path = $location.path();
            })
        }
    ])
;