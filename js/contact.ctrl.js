(function(){
'use strict';

 angular
  .module('app')
  .controller('ContactCtrl', ContactCtrl);

  function ContactCtrl(){
    var vm = this;

    vm.page = {
      topic:'Contact Us',
      desc:'support available'
    };
  }

}).call(this);
