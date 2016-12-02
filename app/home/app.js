var myApp = angular.module('myApp',[
    'ui.router','myStoreCtrls','helloCtrls','myServiceCtrls',
    'helloCom'
]);

myApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when('','/books');

    // var helloState = {
    //     name: 'hello',
    //     url: '/hello',
    //     component: 'hello'
    // }
    var helloState = {
        name: 'hello',
        url: '/hello',
        templateUrl: '../hello/hello.html'
    };
    var booksState = {
        name: 'books',
        url: '/books',
        templateUrl: '../book_list/index.html'
    };

    $stateProvider.state(helloState);
    $stateProvider.state(booksState);
});