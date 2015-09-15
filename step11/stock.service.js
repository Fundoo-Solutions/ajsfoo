function StockService($http) {
    var self = this;

    self.query = function() {
        return $http.get('/api/stocks');
    };
}

angular.module('stockMarketApp')
    .service('StockService', ['$http', StockService]);