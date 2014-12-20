models.Project = function(id, name, rate) {
    this.id = id || -1;
    this.name = name || '';
    this.rate = rate || 0;
    this.account = new models.Account();
};

models.Project.prototype.toJSON = function(){
    return models.Project.toJSON(this);
};

models.Project.parse = function(proto_project) {
    var project = new models.Project();

    project.id   = proto_project.id;
    project.name = proto_project.name;
    project.rate = proto_project.rate;

    models.Account.parse(proto_project.account, project.account);

    return project;
};

models.Project.toJSON = function(project){
    return {
        id  : project.id,
        name : project.name,
        rate : project.rate,
        account : project.account.toJSON()
    };
};
