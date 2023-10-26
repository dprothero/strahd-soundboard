/// <reference path="../lib/angular.js" />
(function () {
  var module = angular.module("NBLR");

  module.controller("boardController", [
    "$scope",
    "$window",
    function ($scope, $window) {
      $scope.reset = reset;

      $scope.sounds = [
        {
          id: "intro",
          volume: 1,
          loop: true,
        },

        {
          id: "storm",
          volume: 0.5,
          loop: true,
        },
        {
          id: "carriage",
          volume: 0.6,
          loop: true,
        },
        {
          id: "strahd_organ",
          volume: 1,
          loop: false,
        },
        {
          id: "battle_music",
          volume: 0.9,
          loop: true,
        },
        {
          id: "exploration_music",
          volume: 0.9,
          loop: true,
        },
      ];

      function reset() {
        var audio;

        // Stop any that might be playing
        for (var i = 0; i < $scope.sounds.length; i++) {
          audio = $window.document.getElementById($scope.sounds[i].id);
          audio.pause();
          audio.currentTime = 0;
          audio.volume = $scope.sounds[i].volume;
          audio.loop = $scope.sounds[i].loop;
          audio.muted = false;
        }
      }
    },
  ]);
})();
