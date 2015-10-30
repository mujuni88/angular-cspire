(function(){
  angular.module('app')
    .factory('Factory', Factory);
    .service('Service', Service);


    function Factory(){
      var service = {
        foo:'hello',
        func: func
      }

      return service;



      function func(){
        return 'Func';
      }

    }

    function Service(foo){
      this.foo1 = foo;
    }
})();
