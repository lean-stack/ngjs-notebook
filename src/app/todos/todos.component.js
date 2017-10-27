(function(){

    angular.module('nbTodos')
      .component('nbTodos', {
        templateUrl: '/app/todos/todos.component.html',
        controllerAs: 'vm',
        bindings: {
          todos: "<"
        }
      });

  })();
