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
})();
