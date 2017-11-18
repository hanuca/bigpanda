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

        this.removeCommentFromDb = function(comment) {
            return $http.delete('/comments/' + comment.id);
        };

        this.editCommentFromDb = function(comment, newText) {
            var params = {comment: newText};
            return $http.put('/comments/' + comment.id, params);
        };

    });
})();