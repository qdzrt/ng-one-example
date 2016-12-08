angular
    .module('aboutMod',[])
    .controller('mainOne', function ($scope) {
        $scope.checked1 = true;
        $scope.checked2 = true;
    })
    .directive('topIframe', function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: '../about/top.html'
        }
    })
    .directive('mainIframe', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function ($scope,$locale) {
                this.toggle = function (main) {
                }
            },
            templateUrl: '../about/main.html'
        }
    })
    .directive('main', function () {
        return {
            require: '^mainIframe',
            restrict: 'E',
            transclude: true,
            scope: { title: '@' },
            link: function (scope, elem, attr, mainIframeCtrl) {
                mainIframeCtrl.toggle(scope);
            },
            templateUrl: function (elem, attr) {
                return '../about/main-'+ attr.title + '.html'
            }
        }
    })
    .directive('footerIframe', function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: '../about/footer.html'
        }
    })
;