(function(){

  angular.module('nbTodos')
    .component('todoList', {
      templateUrl: '/app/todos/todo-list/todo-list.component.html',
      controllerAs: 'vm',
      bindings: {
        todos: "<"
      }
  });

})();
