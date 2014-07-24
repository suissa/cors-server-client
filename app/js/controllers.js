'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope', 'Cors',
        function($scope, Cors) {

            var base = 'http://cors-server.getup.io/url/';
            var url = 'api.redtube.com/?data=redtube.Videos.searchVideos&search=Sasha%20Gray';

            $scope.urlFull = base + url;
            $scope.url = url;

            $scope.submit = function() {
                find(this.url);
            }

            var find = function(url) {
                $scope.loading = true;
                Cors.get(url)
                    .then(function(data) {
                        $scope.data = data;
                        $scope.loading = false;
                        console.log('success', data);
                    }, function(error) {
                        console.log('error', data);
                        $scope.loading = false;
                    });
            }

            $scope.find = find;
            find($scope.url);

        }
    ])
    .controller('MyCtrl2', ['$scope',
        function($scope) {

        }
    ]);