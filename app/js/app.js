'use strict';


var base = 'http://cors-server.getup.io/url/';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/cors', {
            templateUrl: 'partials/partial1.html',
            controller: 'MyCtrl1'
        });
        $routeProvider.otherwise({
            redirectTo: '/cors'
        });
    }
]);