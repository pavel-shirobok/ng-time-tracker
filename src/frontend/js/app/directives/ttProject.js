angular.
    module('ttProject', [
        'ProjectController'
    ]).
    directive('ttProject', function(){

        return {
            restrict : 'E',
            replace: true,
            controller : 'ProjectController',
            templateUrl : 'js/app/templates/projectView.html',
            scope: {
                project : '=project'
            }
        }
    });