function RegisterController($window, $log) {
    var self = this;
    self.user = {};
    self.register = function() {
        self.message = 'Successfully clicked register with ' + self.user.username;
        $log.log(self.message);
        $window.alert(self.message);
    };
}

angular.module('stockMarketApp')
    .controller('RegisterCtrl', ['$window', '$log', RegisterController]);