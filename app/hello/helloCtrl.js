var helloCtrls = angular.module('helloCtrls',[]);

helloCtrls.controller('HelloCtrl',function ($scope) {
    $scope.name = 'Angular';
    $scope.sayHello = function(){
        $scope.greeting = 'Hello' + ' ' + $scope.name + '!';
    };
});
