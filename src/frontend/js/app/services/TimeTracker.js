angular
    .module('TimeTracker', [

    ])
    .service('TimeTracker', function($rootScope) {
        var self = this;
        var model;

        if(
            localStorage['data']==undefined ||
            JSON.parse(localStorage['data']) == undefined
        ){
            var proto_json = { lastID : 0, projects : [] };
            model = models.TimeTracker.parse(proto_json);
            flush();
        }



        model = models.TimeTracker.parse(
            JSON.parse(
                localStorage['data']
            )
        );

        console.log(model);

        function flush() {
            localStorage['data'] = JSON.stringify(model.toJSON());
        }

        self.__defineGetter__('nextID', function(){
            var newID = model.nextID;
            flush();
            return newID;
        });

        self.projects = model.projects;

        self.createProject = function(name, rate) {
            var project = new models.Project(self.nextID, name, rate);
            model.projects.push(project);
            flush();
            return project;
        };


        //TODO make getter
        //self.model = model;
    });