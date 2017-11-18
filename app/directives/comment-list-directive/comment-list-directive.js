(function() {
    'use strict';

    var commentApp = angular.module('comment-app');

    commentApp.directive('commentList', function($uibModal) {

        return {
            restrict: 'E',

            templateUrl: 'directives/comment-list-directive/comment-list.html',
            scope: {
                commentList: '='
            },
            controller: function($scope, commentService) {
                $scope.deleteComment = function(comment) {

                    showDeleteCommentDialog(comment).then(function() {
                      removeCommentFromList(comment);
                      commentService.removeCommentFromDb(comment);
                    });
                };

                $scope.editComment = function(comment) {
                    showEditCommentDialog().then(function(result) {
                        comment.comment = result;
                   });
                };

                function showDeleteCommentDialog(comment) {

                    var modalInstance = $uibModal.open({
                      templateUrl: 'dialogs/delete-comment-dialog.html',
                      controller: 'deleteCommentDialogCtrl'
                    })

                    return modalInstance.result;
                }

                function removeCommentFromList(comment) {

                   _.remove($scope.commentList, { 'id': comment.id});
                }

                function showEditCommentDialog(comment) {

                   var modalInstance = $uibModal.open({
                     templateUrl: 'dialogs/edit-comment-dialog.html',
                     controller: 'editCommentDialogCtrl'
                   })

                   return modalInstance.result;
                }
            }
         };
    });
})();