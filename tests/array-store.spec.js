
describe('Array Store', () => {
    beforeEach(module('nbTodos'))
    
    var store = undefined;
    beforeEach(inject( (_todosArrayStore_) => {
        store = _todosArrayStore_;
    }));

    it('has initially zero todo items', (done) => {
        store.getAll().then(function(data){
            expect(data.length).toBe(0);
            done();
        }, function (){

        });
    });

    it('has can create new todos', (done) => {
        var txt = 'Yep';
        store.create(txt).then(function(data){
            expect(data.text).toBe(txt);
            expect(data.done).toBeFalsy();
            expect(data.id).toBeDefined();
            done();
        }, function (){

        });
    });
});