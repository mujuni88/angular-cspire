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
})();
