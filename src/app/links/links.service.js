(function() {

    angular.module('nbLinks')
        .service('linksStore', LinksService);

    function LinksService() {

        this.categories = [
            { id: 1, name: "JavaScript" },
            { id: 2, name: "CSS" },
            { id: 3, name: "AngularJS" },
            { id: 4, name: "Angular" },
            { id: 5, name: "React" },
            { id: 6, name: "Node" }
        ];

        this.getAllCategories = function () {
            return this.categories;
        }
    }
})();