module.exports = function(ngModule) {
  ngModule.directive('kcdHello', function() {
    return {
      restrict: 'E',
      scope: {},
      // can use template instead of templateUrl when using webpack
      // templateUrl: 'directives/kcd-hello.html',
      template: require('./kcd-hello.html'),
      controllerAs: 'vm',
      controller: function() {
        var vm = this;

        vm.greeting = 'Hello webpack';
      }
    };
  });
};