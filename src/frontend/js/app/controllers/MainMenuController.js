angular.
    module('MainMenuController', [

    ]).
    controller('MainMenuController', function($scope, $mdBottomSheet){
        $scope.callFunction = function($event, action){
            console.log($event);
            $mdBottomSheet.hide({action: action, $event : $event });
        }
    });