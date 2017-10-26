(function(){

  angular.module('nbTodos')
    .factory('todosStore', storeFactory);

  storeFactory.$inject = ['$rootScope'];
  function storeFactory($rootScope) {
    var store = new ArrayStore($rootScope);
    store.create('Unit testing');
    return store;
  }

  function ArrayStore(scope) {

    this.todos = [];
    this.maxId = 0;
    this.scope = scope;

  }

  ArrayStore.prototype.getAll = function() {

    var store = this;

    return new Promise(function(resolve, reject) {
      resolve(store.todos);
      store.scope.$digest();
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
      store.scope.$digest();
      resolve(todo);
    });
  }
})();
