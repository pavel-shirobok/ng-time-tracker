
angular.
    module('TimeTrackerAPI', []).
    service('TimeTrackerAPI', function($q, $timeout){
        var self = this;
        //var DB = [];


        self.getProjects = function(){
            return $q(function(resolve, reject){

            });

            /*return $timeout(function(){
                return [
                    { name : 'Test project 1', rate : 10, times: [] },
                    { name : 'Test project 2', rate : 10, times: [] }
                ];
            }, 100)*/
        };

        self.createProject = function(name, rate){
            /*return $timeout(function(){

            }, 100);*/
        };

        self.startTimer = function(project, newTimer) {
            /*return $timeout(function(){

            }, 100);*/
        };





    });