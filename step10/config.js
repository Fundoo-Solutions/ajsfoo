angular.module('stockMarketApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('list', {
            templateUrl: 'list.html',
            controller: "MainCtrl as ctrl",
            url: '/'
        });
        $stateProvider.state('list.child', {
            template: '<h2>Hello Child</h2>',
            url: 'child'
        });
        $stateProvider.state('register', {
            templateUrl: 'register.html',
            controller: "RegisterCtrl as rCtrl",
            url: '/register'
        });
        $urlRouterProvider.otherwise('/');
    }]);