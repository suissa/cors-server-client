'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
value('version', '0.1')
    .factory('Cors', function($http, $q) {
        return {
            get: function(url) {
                return $http.get(base + url)
                    .then(function(response) {
                        // Adicionar lógica extra aqui
                        return response.data;
                    }, function(response) {
                        return $q.reject(response.data);
                    });
            },
            post: function(url, data) {
                return $http.post(base + url, data)
                    .then(function(response) {
                        // Adicionar lógica extra aqui
                        return response.data;
                    }, function(response) {
                        return $q.reject(response.data);
                    });
            }
        }
    });