angular.
    module('AppController', [
        'Popups',
        'TimeTracker',
        'MainMenuController'
    ]).
    controller('AppController', function($scope, TimeTracker, Popups, $mdBottomSheet){

        $scope.projects = TimeTracker.projects;
        $scope.openMenu = openMenu;
        $scope.startTracking = startTracking;
        $scope.stopTracking = stopTracking;
        $scope.trackingIsStarted = false;
        $scope.showStartTrackingButton = function(){
            return TimeTracker.projects.length > 0 && !$scope.trackingIsStarted;
        };

        $scope.showStopTrackingButton = function(){
            return TimeTracker.projects.length > 0 && $scope.trackingIsStarted;
        };

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
            var project = getCurrentProject()
            if(!project)return;

            Popups.openConfirmRemove(project, $event).
                then(TimeTracker.removeProject);
        }

        function startTracking($event) {
            $scope.trackingIsStarted = true;
        }

        function stopTracking($event) {
            $scope.trackingIsStarted = false;
        }


        function getCurrentProject(){
            return TimeTracker.projects[$scope.selectedIndex]
        }
    });
