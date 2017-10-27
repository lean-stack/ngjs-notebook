(function(){

  angular.module('nbTodos')
    .service('todosStore', RestStore);

  RestStore.$inject = ['$http', 'todosResourceUrl'];
  function RestStore($http, todosResourceUrl) {

    this.todos = [];

    this.$http = $http;
    this.baseurl = todosResourceUrl.uri;

  }

  RestStore.prototype.getAll = function() {

    var store = this;

    return new Promise(function(resolve, reject) {
      store.$http.get(store.baseurl).then(function(response) {
        store.todos = response.data;
        resolve(store.todos);
      }, function (err) {
        reject(err);
      });
    })
  };

  RestStore.prototype.create = function(txt) {

    var store = this;

    return new Promise(function(resolve, reject) {
      if( !txt ) reject({err: 'Empty todo text'});

      store.$http.post(store.baseurl, { text: txt, done: false }).then(
        function(response) {
            store.todos.push(response.data);
            // $rootScope.$emit('todo.action',{msg: 'Todo item created.'});
            resolve(response.data);
        }, 
        function(error) {
            reject(error);
        }
      );
    });
  }

  RestStore.prototype.update = function(todo) {
    
    var store = this;
    return new Promise(function(resolve, reject) {
      store.$http.put(store.baseurl + '/' + todo.id, todo).then(
        function(response){
          // $rootScope.$emit('todo.action'{msg: 'Todo item updated.'});
          resolve(response.data);
        }, 
        function (err){
          reject(err)
        }
      );
    });
  }

  RestStore.prototype.delete = function(todo) {
    var store = this;
    return new Promise(function(resolve, reject) {
    store.$http.delete(store.baseurl + '/' + todo.id).then(
      function(response){
        var ix = store.todos.indexOf(todo);
        store.todos.splice(ix,1);
        // $rootScope.$emit('todo.action',{msg: 'Todo item deleted.'});
        resolve();
      }, 
      function (err){
        reject(err)
      }
    );
  });
  }
})();
