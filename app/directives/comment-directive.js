(function() {
    'use strict';

    var commentApp = angular.module('comment-app');

    commentApp.directive('commentItem', function() {

        return {
            restrict: 'E',
            template: '<div>  {{comment.email}} </div> <div> {{comment.comment}} </div> ',
            scope: {
                comment: '='
            }
         };
    });
})();