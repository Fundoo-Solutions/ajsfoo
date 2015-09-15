function MainController(AlertService, StockService) {
    var self = this;
    self.stocks = [];

    StockService.query().then(function(response) {
        self.stocks = response.data;
    });

    self.message = AlertService.get();
}

angular.module('stockMarketApp')
    .controller('MainCtrl', ['AlertService', 'StockService', MainController]);