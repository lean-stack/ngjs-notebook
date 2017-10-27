(function(){

  angular.module('nbTodos')
    .component('todoItem', {
      templateUrl: '/app/todos/todo-item/todo-item.component.html',
      bindings: {
        todo: "<"
      },
      controller: TodoItemController,
      controllerAs: 'vm'
    });

  TodoItemController.$inject = ['todosStore'];
  function TodoItemController(todosStore) {
    this.toggleState = function() {
      todosStore.update(this.todo);
    }
  }

})();
