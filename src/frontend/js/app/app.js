angular.
    module('TimeTrackerApp',
        [
            'TimeTrackerAPI'
        ]
    ).
    controller('Test', function(TimeTrackerAPI){
        console.log('Test started');
        TimeTrackerAPI.getProjects();
    });
