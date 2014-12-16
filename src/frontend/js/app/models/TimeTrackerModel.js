(window.models || (window.models = {})).TimeTracker = function(){
    var self = this;
    var projects = [];

    self.addProject = function(id, name, rate) {
        var project = new models.Project(id, name, rate)
        projects.push(project);
        return project;
    };

    self.__defineGetter__('projects', function(){ return projects; });
};