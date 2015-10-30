(function(){
'use strict';

 angular.module('app')
        .controller('MainCtrl', MainCtrl);

        function MainCtrl($scope){
          var vm = this;

          vm.page = {
            topic:'MAIN CONROLLLER',
            desc:'Sharing resources in app'
          };

          vm.age = 12;
        }

}).call(this);
