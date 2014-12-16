
angular.
    module('TimeTrackerAPI', []).
    service('TimeTrackerAPI', function($q, $timeout){
        var self = this;
        var db = new DB();

        var wrap = function(callback){
            var defer = $q.defer();
            $timeout(function(){ defer.resolve(callback()); }, 100);
            return defer.promise;
        };



        self.getProjects = function() {
            return wrap(function(){ return db.getProjects(); });
        };

        self.createProject = function(name, rate){
            return wrap(function(){ return db.createProject(name, rate); });
        };

        self.startTimer = function(project, newTimer) { };

        ///////////////////////////////
        //DB  fake storage
        ///////////////////////////////

        function DB(){
            var db_self = this,
                data;

            if(localStorage['data']==undefined || JSON.parse(localStorage['data']) == undefined){
                data = { lastID : 0, projects : [] };

                flush();
            }

            data = JSON.parse(localStorage['data']);

            function flush(){
                localStorage['data'] = JSON.stringify(data);
            }

            db_self.getProjects = function(){
                var projects = [];

                $(data.projects).each(function(){
                    projects.push({
                        id : this.id,
                        name : this.name,
                        rate : this.rate
                    });
                });

                return projects;
            };

            db_self.createProject = function(name, rate){
                var project = { name : name, rate : rate, id : ++data.lastID };
                data.projects.push(project);
                flush();
                return JSON.parse(JSON.stringify(project));
            }

        }

    });