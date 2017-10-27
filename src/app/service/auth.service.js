(function (){

    angular.module('app')
        .service('auth',AuthService);

    AuthService.$inject = ['$rootScope'];
    function AuthService($rootScope) {

        var srvc = this;
        var authenticated = false;

        this.isAuthenticated = function () {
            var p = new Promise(function(resolve, reject) {
                if( authenticated ) {
                    resolve(true)
                } else {
                    reject('Not authenticated');
                }
            });

            return p;
        }

        this.authenticate = function (name,passwd, token) {
            this.authenticated = true;
        };

        $rootScope.$on('$stateChangeError', function(e,to, from) {
            console.log(e);
            console.log(to);
        })
    }
})();