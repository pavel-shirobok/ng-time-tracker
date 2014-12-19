angular.
    module('AppController', [
        'Popups',
        'TimeTracker',
        'MainMenuController'
    ]).
    controller('AppController', function($scope, TimeTracker, Popups, $mdBottomSheet){

        $scope.projects = TimeTracker.projects;
        $scope.openMenu = openMenu;



        function openMenu($event) {
            $mdBottomSheet.show({
                templateUrl: 'js/app/templates/mainMenu.html',
                controller : 'MainMenuController',
                targetEvent : $event
            }).then(function(data) {

                switch(data.action){

                    case 'create' :
                        createProject($event);
                        break;

                    case 'remove' :
                        removeProject($event);
                        break;
                }

            });
        }

        function createProject($event){
            Popups.openEditProjectPopup(undefined, $event).
                then(function(project){
                    TimeTracker.createProject(project.name, project.rate);
                });
        }

        function removeProject($event){
            var currentProject = TimeTracker.projects[$scope.selectedIndex];
            if(!currentProject)return;


            Popups.openConfirmRemove(currentProject, $event).
                then(TimeTracker.removeProject);
        }
    });
