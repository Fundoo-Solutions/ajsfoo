function RegisterController(AlertService, UserService) {
    var self = this;
    self.user = {};
    self.register = function() {
        UserService.register(self.user).then(function(response) {
            AlertService.set(response.data.msg);
        }, function(err) {
            AlertService.set(err.data.msg, 'alert-danger');
        });

    };
}

angular.module('stockMarketApp')
    .controller('RegisterCtrl', ['AlertService', 'UserService', RegisterController]);