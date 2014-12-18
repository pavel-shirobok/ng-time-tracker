models.Account = function(){
    var self = this;
    self.items = [];

    var invalidated = true;
    var billCache = 0;

    self.takeBill = function(){
        //todo

        if(invalidated){
            //recalc
            //TODO

            invalidated = false;
            return billCache;
        }

        return billCache;
    };


    self.add = function(accountItem){
        self.items.push(accountItem);
        invalidated = true;
        return accountItem;
    };

    self.remove = function(accountItem) {
        //todo
        invalidated = true;
        return accountItem;
    };

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