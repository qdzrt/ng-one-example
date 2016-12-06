function getPath($rootScope,$location) {
    $rootScope.path = $location.path();
}

angular
    .module('myApp',[
        'ui.router',
        'helloCom',
        'bookListCtrl','bookListService'
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
                        templateUrl: '../home/home.html',
                        controller: getPath
                    }
                }

            })
            .state('index.books',{
                url: '/books',
                views: {
                    'main@index': {
                        templateUrl: '../book_list/books.html',
                        controller: getPath
                    }
                }
            })
            .state('index.books.list',{
                url: '/list',
                templateUrl: '../book_list/list.html',
                controller: getPath
            })
            .state('index.books.hello',{
                url: '/hello',
                templateUrl: '../hello/hello.html',
                controller: getPath
            })
            .state('index.about',{
                url: '/about',
                views: { // 替换ui-view='main'内容
                    'main@index': {
                        templateUrl: '../about/about.html',
                        controller: getPath
                    }
                }
            })
    });