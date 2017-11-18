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
            controller: function($scope) {
                $scope.deleteComment = function(comment) {

                    showDeleteCommentDialog(comment);
                };

                $scope.editComment = function(comment) {

                    alert('edit');
                };

                function showDeleteCommentDialog(comment) {

                    var modalInstance = $uibModal.open({
                      templateUrl: 'dialogs/delete-comment-dialog.html',
                      controller: 'deleteCommentDialogCtrl'
                    })

                    modalInstance.result.then(function() {
                      removeCommentFromList(comment);
                    });
                }

                function removeCommentFromList(comment) {

                   _.remove($scope.commentList, { 'id': comment.id});
                }
            }
         };
    });
})();