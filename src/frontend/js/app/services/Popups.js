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
        };

        self.openConfirmRemove = function (project, $event) {
            return $mdDialog.show(
                $mdDialog.confirm({})
                    .title('Do you want delete project?')
                    .content('Delete "' + project.name + '" ?')
                    .ok('Delete it!')
                    .cancel('No')
                    .ariaLabel('Lucky day')
                    .targetEvent($event.originalEvent)
            ).then(function(){

                    return project;
                });
        };

    });