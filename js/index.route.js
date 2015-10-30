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
      .state('posts', {
        url:'/posts',
        templateUrl: 'templates/list-posts.html',
        controller: 'PostCtrl',
        controllerAs: 'pt'
      })
      .state('posts.view', {
        url: '/:postId',
        templateUrl: 'templates/view-posts.html',
        controller: 'PostCtrl',
        controllerAs: 'pt'
      })
  }
})();
