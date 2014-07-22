'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', '$http', function($scope, $http) {
    
    var base = 'http://cors-server.getup.io/url/';
    var url = 'api.redtube.com/?data=redtube.Videos.searchVideos&search=Sasha%20Gray';
    
    $scope.urlFull = base+url;
    $scope.url = url;

    $scope.submit = function(){
      find(this.url);
    }
    var find = function (url){
      console.log(url);
      var url = base+url;
      $scope.loading = true;
      $http.get(url).
      success(function(data){ 
        $scope.data = data;
        $scope.loading = false;
        console.log('success', data);
      }).
      error(function(data){ 
        console.log('error', data);
        $scope.loading = false;
      });
    }

    $scope.find = find;
    find($scope.url);

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
