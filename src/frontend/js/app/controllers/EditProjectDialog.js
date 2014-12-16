angular.
    module('EditProjectDialog', []).
    controller('EditProjectDialog', function($scope, $mdDialog, proto_project){
        $scope.project = { name : proto_project.name, rate : proto_project.rate };

        $scope.isInvalidData = function(){
            //TODO: make test for rate value
            return ($scope.project.name == undefined || $scope.project.name.length == 0)
        };

        $scope.saveProject = function(){ $mdDialog.hide($scope.project); };

        $scope.cancelEdit = function(){ $mdDialog.cancel(); };
    });