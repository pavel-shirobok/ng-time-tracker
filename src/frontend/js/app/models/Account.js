models.Account = function(){
    this.items = [];
    this.__invalidated = true;
    this.__billCache = 0;
};

models.Account.prototype.takeBill = function(){
    if(this.__invalidated){
        this.__invalidated = true;
        //TODO make recalculation
        return this.__billCache;
    }
};

models.Account.prototype.add = function(item) {
    this.items.push(item);
    this.__invalidated = true;
    return item;
};

models.Account.prototype.remove = function(item) {
    //TODO remove item
    this.__invalidated = true;
    return item;
};

models.Account.prototype.toJSON = function(){
    return models.Account.toJSON(this);
};



models.Account.parse = function(proto_json, ext_account){
    var account = ext_account || new models.Account();

    $(proto_json).each(function(){
        account.add(
            models.parseAccountItem(this)
        );
    });

    return account;
};

models.Account.toJSON = function(account){
    return $(account.items).map(function(){ return this.toJSON() });
};