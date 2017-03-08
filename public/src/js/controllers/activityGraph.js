'use strict';

angular.module('rise_explorer.tools').controller('ActivityGraph',
  function (activityGraph, $scope) {
      activityGraph($scope);
  });
