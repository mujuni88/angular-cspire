

(function() {
	'use strict';

	angular.module('app',['ngResource','ngRoute','ui.router']);
})();

(function() {
    'use strict';
    angular.module('app').factory('Post', PostResourceFactory);

    function PostResourceFactory($resource) {
        var url = 'http://jsonplaceholder.typicode.com/posts/:postId';
        return $resource(url, {
            postId: '@id'
        }, {
            update: {
                method: 'PUT'
            },
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }
    PostResourceFactory.$inject = ["$resource"];
})();

(function(){
  'use strict';

  angular
    .module('app')
    .factory('PostHttpFactory', PostHttpFactory);

    function PostHttpFactory($http, $resource, $log){
      var url = 'http://jsonplaceholder.typicode.com';
      var service = {
        getPost:getPost,
        getPosts:getPosts,
        getPostComments:getPostComments
      }

      return service;

      function getPost(id){
        $log.error('ID.\n' + id);
        return $http.get(url+'/posts/'+id)
                .then(getPostCompleted)
                .catch(getPostFailed);

        function getPostCompleted(response){
          return response.data;
        }
        function getPostFailed(error){
          $log.error('XHR Failed for getPost.\n' + angular.toJson(error.data, true));
        }

      }

      function getPosts(){
        return $http.get(url+'/posts')
                .then(getPostsCompleted)
                .catch(getPostsFailed);

        function getPostsCompleted(response){
          return response.data;
        }
        function getPostsFailed(error){
          $log.error('XHR Failed for getPosts.\n' + angular.toJson(error.data, true));
        }

      }

      function getPostComments(id){
        return $http.get(url+'/posts'+id+'/comments')
                .then(getPostCommentsCompleted)
                .catch(getPostCommentsFailed);

        function getPostCommentsCompleted(response){
          return response.data;
        }
        function getPostCommentsFailed(error){
          $log.error('XHR Failed for getPostComment.\n' + angular.toJson(error.data, true));
        }

      }

    }
    PostHttpFactory.$inject = ["$http", "$resource", "$log"];
})();

(function(){
  'use strict';

  angular
    .module('app')
    .controller('PostCtrl', PostCtrl);

    function PostCtrl(PostHttpFactory, Post,$stateParams, $log) {
        var vm = this;
        vm.page = {
            topic: 'POSTS',
            desc: 'posts using $http vs $resource'
        };

        vm.getPosts = getPosts;
        vm.getPost = getPost;
        vm.find = find;
        vm.findOne = findOne;

        function getPosts() {
            return PostHttpFactory.getPosts()
                    .then(getPostsCompleted);

            function getPostsCompleted(data) {
                vm.posts = data;
                return vm.posts;
            }
        }

        function getPost() {
            return PostHttpFactory.getPost($stateParams.postId)
                    .then(getPostCompleted);

            function getPostCompleted(data) {
                vm.post = data;
                return vm.post;
            }
        }

        function find(){
          vm.posts = Post.query(function(data){
            vm.posts = data.slice(0,10);
          });
        }

        function findOne(){
          vm.post = Post.get({
            postId:$stateParams.postId
          });
        }
    }
    PostCtrl.$inject = ["PostHttpFactory", "Post", "$stateParams", "$log"];
})();

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
        MainCtrl.$inject = ["$scope"];

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
  routeConfig.$inject = ["$routeProvider", "$urlRouterProvider", "$stateProvider"];
})();


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
    HomeCtrl.$inject = ["PostHttpFactory", "Post", "$log", "$scope", "Factory", "Service"];
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
