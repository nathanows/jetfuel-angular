'use strict';

/**
 * @ngdoc service
 * @name jetfuelAngularApp.urlService
 * @description
 * #urlService
 * Service in the jetfuelAngularApp.
 */
angular.module('jetfuelAngularApp')
  .service('urlService', ['$http', function ($http) {

    var urlBase = "http://api.lvh.me:3000/api/v1/url.json";

    this.getSortedUrls = function(sort_order) {
      return $http.get(urlBase + '?sort_order=' + sort_order);
    }

    this.createUrl = function(url) {
      return $http.post(urlBase, url)
    }
  }]);
