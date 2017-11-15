(function() {
    'use strict';

    var commentApp = angular.module('comment-app');

    commentApp.directive('commentList', function() {

        return {
            restrict: 'E',

            templateUrl: 'directives/comment-list-directive/comment-list.html',
            scope: {
                commentList: '='
            },
            controller: function($scope) {
                $scope.deleteComment = function(comment) {

                    alert('delete');
                };

                $scope.editComment = function(comment) {

                    alert('edit');
                };
            }
         };
    });
})();