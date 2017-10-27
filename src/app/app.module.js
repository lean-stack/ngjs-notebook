(function(){

  // Main app module
  angular.module('app', ['nbTodos'])
    .config(configureTodos)
    .run(appStart);

  appStart.$inject = ['$log'];
  function appStart($log) {
    $log.info('App started, ' + new Date());
  }
  configureTodos.$inject = ['todosResourceUrl'];
  function configureTodos(todosResourceUrl) {
      todosResourceUrl.uri = 'http://localhost:4000/api/todos';
  }

})();
