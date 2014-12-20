models.TimeTracker = function(lastID){
    this.lastID = lastID || 0;
    this.projects = [];
};

models.TimeTracker.prototype.add = function(project) {
    this.projects.push(project);
    return this;
};

models.TimeTracker.prototype.remove = function(project) {
    var iof = this.projects.indexOf(project);
    if(iof > -1){
        this.projects.splice(iof, 1);
    }
    return this;
};

models.TimeTracker.prototype.__defineGetter__('nextID', function(){
    return ++this.lastID;
});

models.TimeTracker.prototype.toJSON = function(){
    return models.TimeTracker.toJSON(this);
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
};
