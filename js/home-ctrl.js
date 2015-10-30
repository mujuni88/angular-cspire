(function() {
    'use strict';
    angular.module('app')
      .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl(PostHttpFactory, Post, $log, $scope, Factory, Service) {
        var vm = this;
        vm.page = {
            topic: 'HOME CTRL',
            desc: 'Sharing resources in app'
        };
        vm.age = 12 +'<span>test</span>';

        vm.foo = Factory.foo;
        vm.foo1 = Service('hello');

        $scope.$watch("vm.age", handleAgeChange);

        function handleAgeChange(newValue, oldValue) {
            $log.info("vm.age:", newValue);
        }
    }
}).call(this);
