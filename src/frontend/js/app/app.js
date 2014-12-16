angular.
    module('TimeTrackerApp',
        [
            //Controllers :

            //Services:
            'TimeTracker', 'Popups',

            //External modules :
            'ngMaterial'
        ]
    ).
    controller('Test', function($scope, TimeTracker, Popups, $mdSidenav, $timeout){

        $scope.selectedProjectIndex = -1;

        $scope.$watch('selectedProjectIndex', function(){
            console.log($scope.selectedProjectIndex);
        });

        $scope.openMenu = function(){
            $mdSidenav('menu').toggle();
        };

        $scope.closeMenu = function(){
            $mdSidenav('menu').toggle();
        };

        TimeTracker.getProjects().then(function(projects){
            $scope.tabs = projects;
        });

        $scope.createProject = function(ev){
            Popups.openEditProjectPopup(undefined, ev).
                then(
                //CONFIRM
                function(project){

                    TimeTracker.createProject(project.name, project.rate);

                    console.log('new project', project);
                },
                //CANCEL
                function(){
                    console.log('canceled')
                }
            );
        };

    });
