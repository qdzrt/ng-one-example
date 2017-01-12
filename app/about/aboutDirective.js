/**
 * @restrict
 * E 作为元素名使用
 * A 作为属性使用
 * C 作为类名使用
 * M 作为注释使用
 *
 *
 * 前缀修饰 ？、^ 和？^
 * 无： 当前指令中查找控制器
 * ^： 指向上游的指令，没有，则抛出错误
 * ?： 当前指令找不到控制器，则将null作为link的第四个参数
 * ?^： 上游指令，没有，不抛出错误
 */

angular
    .module('aboutModule',[])
    .controller('mainOneCtrl', function ($scope) {
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