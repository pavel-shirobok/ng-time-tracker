angular
    .module('TimeTracker', [
        'TimeTrackerAPI'
    ])
    .service('TimeTracker', function(TimeTrackerAPI){
        var self = this;
        var model = new models.TimeTracker();

        self.getProjects = function(){
            return TimeTrackerAPI.getProjects().then(function(projects){
                $(projects).each(function(){
                    model.addProject(
                        this.id,
                        this.name,
                        this.rate
                    );
                });
                return model.projects;
            })
        };

        self.createProject = function(name, rate) {
            return TimeTrackerAPI.createProject(name, rate).
                then(function(project){
                    return model.addProject(project.id, project.name, project.rate);
                });
        };

        self.__defineGetter__('model', function(){ return model; });
    });