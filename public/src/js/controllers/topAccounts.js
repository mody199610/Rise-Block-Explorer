'use strict';

angular.module('rise_explorer.address').controller('TopAccounts',
  function ($scope, lessMore) {
      $scope.topAccounts = lessMore({
          url : '/api/getTopAccounts',
          key : 'accounts'
      });
  });
