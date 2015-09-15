function MainController(AlertService, StockService) {
    var self = this;
    self.stocks = [];

    StockService.query().then(function(response) {
        self.stocks = response.data;
    });
    self.calculateChange = function(stock) {
        var diff = stock.price - stock.previous;
        return Math.ceil((diff / stock.previous) * 100);
    };
    self.changeClass = function(stock) {
        return {
            positive: stock.price >= stock.previous,
            negative: stock.price < stock.previous
        };
    };
    self.message = AlertService.get();
}

angular.module('stockMarketApp')
    .controller('MainCtrl', ['AlertService', 'StockService', MainController]);