models.AccountItem = function() {

};

/*models.TimerAccountItem = function(){
    var self = this;
    self.prototype = new models.AccountItem();
};

models.FakeAccountItem = function() {
    var self = this;
    self.prototype = new models.AccountItem();
};

models.ManualTimeAccountItem = function() {
    var self = this;
    self.prototype = new models.AccountItem();
};*/

models.parseAccountItem = function(proto_account_item){
    return new models.AccountItem();
};
