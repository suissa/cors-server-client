'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', '$http', function($scope, $http) {
    var url = 'http://cors-server.getup.io/url/api.redtube.com/?data=redtube.Videos.searchVideos&search=Sasha%20Gray';
    $http.get(url).
    success(function(data){ 
      $scope.data = data;
      console.log('success', data);
    }).
    error(function(data){ 
      console.log('error', data);
    });
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
