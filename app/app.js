(function() {
    'use strict';

    var commentApp = angular.module('comment-app', ['ui.bootstrap']);

    commentApp.controller('commentCtrl', function($scope, commentService){

        $scope.commentList = [];
        commentService.getComments().then(function(commentsList) {
            $scope.commentList = commentsList;
        });
    });
})();
