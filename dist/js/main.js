
(function() {
	'use strict';

	angular.module('app',['ngResource','ngRoute','ui.router']);
})();

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

(function(){
  'use strict';

  angular
        .module('app')
        .config(routeConfig);

  function routeConfig($routeProvider, $urlRouterProvider, $stateProvider) {
/*    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'hm'
      })
      .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'ab'
      })
      .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'ct'
      })
      .otherwise({
        redirectTo: '/'
      });
*/
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'hm'
      })
      .state('about', {
        url:'/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'ab'
      })
      .state('contact', {
        url:'/contact',
        templateUrl: 'templates/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'ct'
      })
  }
  routeConfig.$inject = ["$routeProvider", "$urlRouterProvider", "$stateProvider"];
})();


(function(){
'use strict';

 angular
  .module('app')
  .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(){
    var vm = this;

    vm.page = {
      topic:'Factory vs Service',
      desc:'Sharing resources in app'
    };

    vm.age = 12;
  }

}).call(this);


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
