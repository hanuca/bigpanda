(function() {
    'use strict';

    var commentApp = angular.module('comment-app');

    commentApp.directive('commentItem', function() {

        return {
            restrict: 'E',

            templateUrl: 'directives/comment-directive/comment-item.html',
            scope: {
                comment: '='
            }
         };
    });
})();