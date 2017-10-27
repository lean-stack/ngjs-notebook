(function(){

  angular.module('nbTodos')
    .component('todoList', {
      templateUrl: '/app/todos/todo-list/todo-list.component.html',
      controller: TodoListController,
      controllerAs: 'vm'
  });

  TodoListController.$inject = ['todosStore', '$scope'];
  function TodoListController(todosStore, $scope) {

    var ctrl = this;
    ctrl.todos = [];

    // Initialize
    todosStore.getAll().then(function(todos){
      $scope.$apply(ctrl.todos = todos);
    });
  }
})();
