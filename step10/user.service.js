function UserService($http) {
    var self = this;

    self.register = function(user) {
        return $http.post('/api/register', user);
    };
}

angular.module('stockMarketApp')
    .service('UserService', ['$http', UserService]);