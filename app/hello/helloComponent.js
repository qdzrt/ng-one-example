function sayHello() {
    this.greeting = 'hello everyone!';
}

angular
    .module('helloCom', [])
    .component('hello', {
        transclude: true,
        // 注：此处路径非 templateUrl: 'hello_component.html'
        templateUrl: '../hello/hello_component.html',
        controller: sayHello
    });