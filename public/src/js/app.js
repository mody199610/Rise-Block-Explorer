'use strict';

angular.module('rise_explorer',[
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngProgress',
    'ui.bootstrap',
    'gettext',
    'rise_explorer.system',
    'rise_explorer.socket',
    'rise_explorer.blocks',
    'rise_explorer.transactions',
    'rise_explorer.address',
    'rise_explorer.search',
    'rise_explorer.tools'
]);

angular.module('rise_explorer.system', []);
angular.module('rise_explorer.socket', []);
angular.module('rise_explorer.blocks', []);
angular.module('rise_explorer.transactions', []);
angular.module('rise_explorer.address', []);
angular.module('rise_explorer.search', []);
angular.module('rise_explorer.tools', []);
