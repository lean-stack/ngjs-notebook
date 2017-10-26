(function(){

  // Feature module todos
  angular.module('nbTodos', [])
    .run(moduleStart);

  moduleStart.$inject = ['$log'];
  function moduleStart($log) {
    $log.info('Todos module started at ' + new Date());
  }

})();
