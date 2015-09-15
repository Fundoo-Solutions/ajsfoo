function RegisterController() {
    var self = this;
    self.user = {};
    self.register = function() {
        self.message = 'Successfully clicked register with ' + self.user.username;
    };
}

angular.module('stockMarketApp')
    .controller('RegisterCtrl', RegisterController);