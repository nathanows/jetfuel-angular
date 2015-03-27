'use strict';

/**
 * @ngdoc function
 * @name jetfuelAngularApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the jetfuelAngularApp
 */
angular.module('jetfuelAngularApp')
  .controller('SearchCtrl', ['$scope', 'urlService',
    function ($scope, urlService) {

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
  }]);
