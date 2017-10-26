// Main app module
angular.module('app', [])
  .run(appStart);

appStart.$inject = ['$log'];
function appStart($log) {
  $log.info('App started ...');
}
