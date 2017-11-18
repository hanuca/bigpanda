(function() {
    'use strict';

    var commentApp = angular.module('comment-app');

    commentApp.controller('editCommentDialogCtrl', function($scope, $uibModalInstance) {

      $scope.confirmEditComment = function() {

        if ($scope.commentText) {
            $uibModalInstance.close($scope.commentText);
        } else {
            $uibModalInstance.dismiss();
        }
      };

      $scope.cancel = function() {
        $uibModalInstance.dismiss();
      };
    });
})();