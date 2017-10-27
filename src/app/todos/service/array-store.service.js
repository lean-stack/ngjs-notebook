(function(){

  angular.module('nbTodos')
    .factory('todosStore', storeFactory);

  function storeFactory() {
    var store = new ArrayStore();
    store.create('Unit testing');
    return store;
  }

  function ArrayStore() {

    this.todos = [];
    this.maxId = 0;

  }

  ArrayStore.prototype.getAll = function() {

    var store = this;

    return new Promise(function(resolve, reject) {
      resolve(store.todos);
    })
  };

  ArrayStore.prototype.create = function(txt) {

    var store = this;

    return new Promise(function(resolve, reject) {
      if( !txt ) reject({err: 'Empty todo text'});

      var todo = {
        id: ++store.maxId,
        txt: txt,
        done: false
      };
      store.todos.push(todo);
      resolve(todo);
    });
  }
})();
