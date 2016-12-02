angular.module('helloCom',[]).component('hello',{
    template: '<h3>{{$ctrl.greeting}}</h3>',
    controller: function () {
        this.greeting = 'hello everyone!';
    }

});