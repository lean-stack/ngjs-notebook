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
      if( this.text.trim().length === 0) {
        this.error = true;
        return;
      }
      todosStore.create(this.text);
      this.text = '';
    }
  }
})();
