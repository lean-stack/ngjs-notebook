
describe('Rest Store', () => {
    beforeEach(module('nbTodos'))
    
    var store = undefined;
    var http;

    beforeEach( () => {

        module(function($provide) {
            $provide.value('todosResourceUrl', { uri: '/test'});
        });

        inject(function($injector) {
            store = $injector.get('todosStore');
        });
    });

    it('has configured uri', () => {
        expect(store.baseurl).toBe('/api/todos');
    });
    /*
    it('has initially zero todo items', (done) => {
        store.getAll().then(function(data){
            expect(data.length).toBe(0);
            done();
        }, function (){

        });
    });

    it('can create new todos', (done) => {
        var txt = 'Yep';
        store.create(txt).then(function(data){
            expect(data.text).toBe(txt);
            expect(data.done).toBeFalsy();
            expect(data.id).toBeDefined();
            done();
        }, function (){

        });
    });
    */
});