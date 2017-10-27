(function(){
    
    angular.module('nbLinks')
    .component('categoryList', {
        templateUrl: '/app/links/category-list.component.html',
        bindings: {
            list: "<"
        },
        controllerAs: 'vm'
    });

})();