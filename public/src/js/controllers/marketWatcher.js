'use strict';

angular.module('rise_explorer.tools').controller('MarketWatcher',
  function (marketWatcher, $scope) {
      marketWatcher($scope);
  });
