(function(){

  angular.module('nbTodos')
    .component('todoList', {
      templateUrl: '/app/todos/todo-list/todo-list.component.html',
      controller: TodoListController,
      controllerAs: 'vm'
  });

  TodoListController.$inject = ['todosStore'];
  function TodoListController(todosStore) {

    var ctrl = this;
    ctrl.todos = [{}];

    // Initialize
    todosStore.getAll().then(function(todos){
      ctrl.todos = todos;
    });
  }
})();
