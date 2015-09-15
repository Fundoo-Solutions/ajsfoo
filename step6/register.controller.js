function RegisterController(AlertService) {
    var self = this;
    self.user = {};
    self.register = function() {
        AlertService.set('Successfully clicked register with ' + self.user.username);
    };
}

angular.module('stockMarketApp')
    .controller('RegisterCtrl', ['AlertService', RegisterController]);