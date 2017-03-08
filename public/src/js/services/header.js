'use strict';

var Header = function ($scope) {
    this.updateBlockStatus = function (res) {
        if (res.success) {
            $scope.blockStatus = {
                height:    res.height,
                fee:       res.fee,
                milestone: res.milestone,
                reward:    res.reward,
                supply:    res.supply
            };
        }
    };

    this.updatePriceTicker = function (res) {
        if (res.success) {
            $scope.btc_usd  = res.btc_usd;
            $scope.rise_btc = res.rise_btc;
            $scope.rise_usd = res.rise_usd;
        } else {
            $scope.btc_usd = $scope.rise_btc = $scope.rise_usd = 0.0;
        }
    };
};

angular.module('rise_explorer.system').factory('header',
  function ($socket) {
      return function ($scope) {
          var header = new Header($scope),
              ns = $socket('/header');

          ns.on('data', function (res) {
              if (res.status) { header.updateBlockStatus(res.status); }
              if (res.ticker) { header.updatePriceTicker(res.ticker); }
          });

          $scope.$on('$destroy', function (event) {
              ns.removeAllListeners();
          });

          return header;
      };
  });
