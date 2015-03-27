'use strict';

/**
 * @ngdoc function
 * @name jetfuelAngularApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the jetfuelAngularApp
 */
angular.module('jetfuelAngularApp')
  .controller('AppCtrl', ['$scope', '$location', 'urlService',
    function ($scope, $location, urlService) {

      $scope.navSearch = function getSearchedUrls() {
        $location.path('/search');
        urlService.getSearchedUrls("updated_at", $scope.searchTerm)
          .success(function(urls) {
            $scope.searchedUrlsList = urls.url;
          })
          .error(function(error) {
            $scope.status = 'Unable to load url data: ' + error.message;
          });
      }

      // form data for creating a new post with ng-model
      /*
       *$scope.urldata = {};
       *$scope.newurl = function() {
       *  urlservice.createurl({url: $scope.urldata})
       *    .success(function(new_url) {
       *      console.log(new_url)
       *      $scope.newurl = new_url.url
       *    })
       *    .error(function(error) {
       *      $scope.status = 'Unable to create url: ' + error.message;
       *    });
       *}
       */
  }]);
