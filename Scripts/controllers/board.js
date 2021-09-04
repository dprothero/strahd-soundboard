/// <reference path="../lib/angular.js" />
(function () {

  var module = angular.module("NBLR");

  module.controller("boardController", ["$scope", "$window", function ($scope, $window) {
    $scope.play = play;

    $scope.sounds = [
      "sloth",
      "starwarstyphoon",
      "tinyboat",
      "trileggedminotaur",
      "villain",
      "wantitnow",
      "weirdmask",
      "whatido",
      "whatswrongwithhim",
      "wristnub",
      "13steaks",
      "bingotown",
      "breakfast",
      "brrdingdong",
      "buffaloney",
      "fingertime",
      "flaps",
      "froggyvoice",
      "funkhousekind",
      "funtown",
      "furryfriend",
      "fuzzycape",
      "getabeard",
      "ghost",
      "girlspicture",
      "halfandahalf",
      "happierfuzzy",
      "horseeggs",
      "hotdog",
      "isthistheparty",
      "jabbajabba",
      "jellyface",
      "killedsnowman",
      "kittycat",
      "latinkid",
      "littlepiggy",
      "lovedasababy",
      "musketballs",
      "ohyeah",
      "pacosinbad",
      "prettymorning"
    ];

    function play(id) {
      var audio;

      // Stop any that might be playing
      for (var i = 0; i < $scope.sounds.length; i++) {
        audio = $window.document.getElementById($scope.sounds[i]);
        audio.pause();
        audio.currentTime = 0;
      }

      audio = $window.document.getElementById(id);
      audio.play();
    }
  }]);

})();
