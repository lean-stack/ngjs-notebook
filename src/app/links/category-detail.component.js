(function(){
    
    angular.module('nbLinks')
    .component('categoryDetail', {
        templateUrl: '/app/links/category-detail.component.html',
        controllerAs: 'vm',
        bindings: {
            category: "<"
        }
    });

})();