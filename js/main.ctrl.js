(function(){
'use strict';

 angular.module('app')
        .controller('MainCtrl', MainCtrl);

        function MainCtrl(){
          var vm = this;

          vm.page = {
            topic:'Factory vs Service',
            desc:'Sharing resources in app'
          };

          vm.age = 12;
        }

}).call(this);
