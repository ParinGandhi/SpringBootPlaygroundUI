(function() {
  'use strict';

  angular
    .module('springBootPlaygroundUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
