function AlertService() {
    var self = this;
    self.message = {};

    self.set = function(text, type) {
        self.message.text = text;
        self.message.type = type || 'alert-info';
    };
    self.get = function() {
        return self.message;
    };
}

angular.module('stockMarketApp')
    .service('AlertService', AlertService);