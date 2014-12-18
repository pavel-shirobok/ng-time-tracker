angular.
    module('AppController', [
        'Popups',
        'TimeTracker'
    ]).
    controller('AppController', function($scope, TimeTracker, Popups){

        $scope.projects = TimeTracker.projects;
        $scope.createProject = createProject;

        function createProject(event){
            Popups.openEditProjectPopup(undefined, event).
                then(function(project){
                    TimeTracker.createProject(project.name, project.rate);
                });
        }
    });
