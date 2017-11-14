(function() {
    'use strict';

    var commentApp = angular.module('comment-app', []);

    commentApp.controller('commentCtrl', function($scope, commentService){

        $scope.commentList = [];
        commentService.getComments().then(function(commentsList) {
            $scope.commentList = commentsList;
        });

        $scope.deleteComment = function(comment) {

            alert('delete');
        };

        $scope.editComment = function(comment) {

            alert('edit');
        };
    });

})();
