'use strict';

angular.module('rise_explorer.tools').controller('NetworkMonitor',
  function (networkMonitor, $scope) {
      networkMonitor($scope);
  });
