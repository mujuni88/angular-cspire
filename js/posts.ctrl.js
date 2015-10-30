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
})();
