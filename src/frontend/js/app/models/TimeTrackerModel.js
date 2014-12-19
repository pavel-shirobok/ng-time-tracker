models.TimeTracker = function(lastID){
    var self = this;
    self.lastID = lastID || 0;
    self.projects = [];

    self.add = function(project) {
        self.projects.push(project);
        return self;
    };

    self.remove = function(project) {
        var iof = self.projects.indexOf(project);
        if(iof > -1){
            self.projects.splice(iof, 1);
        }
        return self;
    };

    self.__defineGetter__('nextID', function(){
        return ++self.lastID;
    });

    self.toJSON = function(){
        return models.TimeTracker.toJSON(self);
    }
};

models.TimeTracker.parse = function(proto_json){
    var timeTracker = new models.TimeTracker();

    timeTracker.lastID = proto_json.lastID;

    $(proto_json.projects).each(function(){
        timeTracker.projects.push(
            models.Project.parse(this)
        )
    });

    return timeTracker;
};

models.TimeTracker.toJSON = function(project){
    return {
        lastID : project.lastID,
        projects : $(project.projects).map(function(){ return models.Project.toJSON(this); })
    }
}
