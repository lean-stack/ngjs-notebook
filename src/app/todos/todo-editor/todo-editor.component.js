(function(){

  angular.module('nbTodos')
    .component('todoEditor', {
      templateUrl: '/app/todos/todo-editor/todo-editor.component.html',
      controller: TodoEditorController,
      controllerAs: 'vm'
    });

  TodoEditorController.$inject = ['todosStore'];
  function TodoEditorController(todosStore) {
    this.text = '';
    this.create = function () {
      todosStore.create(this.text);
      this.text = '';
    }
  }
})();
