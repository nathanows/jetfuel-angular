'use strict';

/**
 * @ngdoc function
 * @name jetfuelAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jetfuelAngularApp
 */
angular.module('jetfuelAngularApp')
  .controller('MainCtrl', ['$scope', 'urlService',
    function ($scope, urlService) {

      function getLastUrls() {
        urlService.getSortedUrls("updated_at")
          .success(function(urls) {
            $scope.lastUrlList = urls.url;
          })
          .error(function(error) {
            $scope.status = 'Unable to load url data: ' + error.message;
          });
      }

      getLastUrls();

      function getTopUrls() {
        urlService.getSortedUrls("requests")
          .success(function(urls) {
            $scope.topUrlList = urls.url;
          })
          .error(function(error) {
            $scope.status = 'Unable to load url data: ' + error.message;
          });
      }

      getTopUrls();

      // Form data for creating a new post with ng-model
      $scope.urlData = {};
      $scope.newUrl = function() {
        urlService.createUrl({url: $scope.urlData})
          .success(function(new_url) {
            console.log(new_url)
            $scope.newUrl = new_url.url
          })
          .error(function(error) {
            $scope.status = 'Unable to create url: ' + error.message;
          });
      }
    }
  ]);
