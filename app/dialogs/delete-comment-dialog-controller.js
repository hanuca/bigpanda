(function() {
    'use strict';

    var commentApp = angular.module('comment-app');

    commentApp.controller('deleteCommentDialogCtrl', function($scope, $uibModalInstance) {

      $scope.confirmDeleteComment = function() {
        $uibModalInstance.close();
      };

      $scope.cancel = function() {
        $uibModalInstance.dismiss();
      };
    });
})();