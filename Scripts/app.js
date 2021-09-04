/// <reference path="lib/angular.js" />
/// <reference path="lib/angular-route.js" />
(function () {

  var module = angular.module("NBLR", ["ngRoute"]);

  module.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "board.html",
        controller: "boardController"
      })
      .otherwise({
        redirectTo: "/"
      });
  }]);

})();
