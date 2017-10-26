(function(){

  // Main app module
  angular.module('app', ['nbTodos'])
    .run(appStart);

  appStart.$inject = ['$log'];
  function appStart($log) {
    $log.info('App started at ' + new Date());
  }

})();
