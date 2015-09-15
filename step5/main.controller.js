function MainController() {
    var self = this;
    self.stocks = [
        {id: "TWTR", name: "Twitter Inc", price: 80, previous: 70},
        {id: "FB", name: "Facebook Inc", price: 54, previous: 58},
        {id: "GOOG", name: "Google Inc", price: 105, previous: 100}
    ];
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
}

angular.module('stockMarketApp')
    .controller('MainCtrl', MainController);