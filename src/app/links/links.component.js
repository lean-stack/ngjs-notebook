(function(){
    
    angular.module('nbLinks')
    .component('nbLinks', {
        templateUrl: '/app/links/links.component.html',
        controllerAs: 'vm',
        bindings: {
            categories: "<"
        }
    });


})();