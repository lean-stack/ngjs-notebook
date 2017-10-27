(function(){
    
      // Feature module links
      angular.module('nbLinks', ['ui.router'])
        .config(routing)
        .run(moduleStart);
    
      moduleStart.$inject = ['$log'];
      function moduleStart($log) {
        $log.info('Links module started at ' + new Date());
      }
    
      routing.$inject = ['$stateProvider', '$urlServiceProvider'];
      function routing($stateProvider, $urlServiceProvider) {
       
        var linksState = {
            name: 'links',
            url: '/links',
            component: 'nbLinks',
            resolve: {
                authenticated: ['auth', function(auth) {
                     return auth.isAuthenticated();
                }],
                categories: ['linksStore', function(linksStore) { return linksStore.getAllCategories(); }]
            }
          };

        $urlServiceProvider.rules.when('/links','/links/');

        var overviewState = {
            name: 'links.overview',
            url: '/',
            template: '<h2>Wähle eine Kategorie</h2>'
        };

        var categoryState = {
            name: 'links.category',
            url: '/category/{categoryId}',
            component: 'categoryDetail',
            resolve: {
                category: ['linksStore', '$stateParams', function(linksStore, $stateParams) { 
                    var links = linksStore.getAllCategories(); 
                    return links.find(function(c) { return c.id == $stateParams.categoryId; })
                }]
        }};

        $stateProvider.state(linksState);
        $stateProvider.state(overviewState);
        $stateProvider.state(categoryState);
      }
    
    })();
    