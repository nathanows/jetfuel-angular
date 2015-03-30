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

      $scope.searchTerm = "";

      $scope.searchURLs = function getSearchedUrls() {
        urlService.getSearchedUrls("updated_at", $scope.searchTerm)
          .success(function(urls) {
            $scope.searchedUrlsList = urls.url;
          })
          .error(function(error) {
            $scope.status = 'Unable to load url data: ' + error.message;
          });
      }

      // Form data for creating a new post with ng-model
      $scope.urlData = {};
      $scope.newUrl = function() {
        urlService.createUrl({url: $scope.urlData})
          .success(function(newUrl) {
            $scope.newUrl = newUrl.url;
            $scope.urlData = '';
            $scope.newUrlForm.$setPristine();
            setTimeout(getLastUrls, 1000);
            setTimeout(getTopUrls, 1000);
          })
          .error(function(error) {
            $scope.status = 'Unable to create url: ' + error.message;
          });
      }
    }
  ]);
