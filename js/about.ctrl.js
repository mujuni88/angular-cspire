(function(){
'use strict';

 angular
  .module('app')
  .controller('AboutCtrl', AboutCtrl);

  function AboutCtrl(){
    var vm = this;

    vm.page = {
      topic:'ABOUT',
      desc:'about our company'
    };

  }

}).call(this);
