angular.
    module('Popups', [
        'EditProjectDialog'
    ]).
    service('Popups', function($mdDialog){
        var self = this;

        self.openEditProjectPopup = function(proto_project, targetEvent){
            proto_project = proto_project || {};
            proto_project.name = proto_project.name || '';
            proto_project.rate = proto_project.rate || 0;

            return $mdDialog.show(
                {
                    templateUrl : 'js/app/templates/editProjectDialog.html',
                    controller : 'EditProjectDialog',
                    targetEvent : targetEvent,
                    locals : {
                        proto_project : proto_project
                    }
                }
            )
        }

    });