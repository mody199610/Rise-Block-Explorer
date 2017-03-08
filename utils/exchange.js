'use strict';

var async = require('async');

module.exports = function (config) {
    this.BTCUSD = this.RISEBTC = '~';

    this.loadRates = function () {
        async.parallel([
            function (cb) { exchange.loadBTCUSD(cb); },
            function (cb) { exchange.loadRISEBTC(cb); }
        ]);
    };

    this.loadBTCUSD = function (cb) {
        console.log('Exchange:', 'Loading BTC/USD curs from exchange...');
        getBTCUSD(function (err, result) {
            if (err) {
                console.log('Exchange:', 'Loading BTC/USD failed...');
                console.log('Error:', err);
            } else if (result !== '~') {
                this.BTCUSD = result;
                console.log('Exchange:', 'BTC/USD loaded...', result);
            }
            if (cb) {
                return cb(err, result);
            }
        }.bind(this));
    };

    this.loadRISEBTC = function (cb) {
        console.log('Exchange:', 'Loading RISE/BTC curs from exchange...');
        getRISEBTC(function (err, result) {
            if (err) {
                console.log('Exchange:', 'Loading BTC/RISE failed...');
                console.log('Error:', err);
            } else if (result !== '~') {
                this.RISEBTC = result;
                console.log('Exchange:', 'BTC/RISE loaded...', result);
            }
            if (cb) {
                return cb(err, result);
            }
        }.bind(this));
    };

    this.RISEUSD = function (rise) {
        if (rise && this.RISEBTC !== '~' && this.BTCUSD !== '~') {
            return (parseFloat(rise) * parseFloat(this.RISEBTC) * parseFloat(this.BTCUSD)).toFixed(3);
        } else {
            return 0;
        }
    };

    // Interval

    if (config.enableExchange) {
        setInterval(this.loadRates, config.updateExchangeInterval);
    }

    // Private

    var exchange = this;
    var api = require('./exchange-api')(config);

    var getBTCUSD = function (cb) {
        if (config.enableExchange) {
            api.getPriceTicker('BTCUSD', function (err, result) {
                return cb(err, result);
            });
        } else {
            console.log('Exchange:', 'Loading BTC/USD disabled...');
            return cb(null, '~');
        }
    };

    var getRISEBTC = function (cb) {
        if (config.enableExchange) {
            api.getPriceTicker('RISEBTC', function (err, result) {
                return cb(err, result);
            });
        } else {
            console.log('Exchange:', 'Loading RISE/BTC disabled...');
            return cb(null, '~');
        }
    };
};
