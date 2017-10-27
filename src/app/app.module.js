(function(){

  // Main app module
  angular.module('app', ['nbTodos','nbLinks','ui.router'])
    .config(configureTodos)
    .config(routing)
    .run(appStart);

  appStart.$inject = ['$log'];
  function appStart($log) {
    $log.info('App started, ' + new Date());
  }
  configureTodos.$inject = ['todosResourceUrl'];
  function configureTodos(todosResourceUrl) {
      todosResourceUrl.uri = 'http://localhost:4000/api/todos';
  }

  routing.$inject = ['$stateProvider', '$urlServiceProvider'];
  function routing($stateProvider, $urlServiceProvider) {
    var homeState = {
      name: 'home',
      url: '/',
      component: 'appHome'
    };
  

    $stateProvider.state(homeState);
   
    $urlServiceProvider.rules.otherwise('/')
  }
})();
