(function(){

  // Feature module todos
  angular.module('nbTodos', ['ui.router'])
    .config(routing)
    .run(moduleStart);

  moduleStart.$inject = ['$log'];
  function moduleStart($log) {
    $log.info('Todos module started at ' + new Date());
  }

  routing.$inject = ['$stateProvider', '$urlServiceProvider'];
  function routing($stateProvider, $urlServiceProvider) {
   
    var todosState = {
      name: 'todos',
      url: '/todos',
      component: 'nbTodos',
      resolve: {
        todos: ['todosStore', function(todosStore) { return todosStore.getAll(); }]
      } 
    };

    $stateProvider.state(todosState);
  }

})();
