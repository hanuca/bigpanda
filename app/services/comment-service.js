(function() {
    'use strict';

    var commentApp = angular.module('comment-app');

    commentApp.service('commentService', function($http) {

        this.getComments = function() {
            var commentsPromise = $http.get('http://localhost:3000/comments');
            return commentsPromise.then(function(result) {
                return result.data;
            });
        };
    });
})();