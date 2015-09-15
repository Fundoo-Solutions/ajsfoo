function StockController() {
    var self = this;

    self.calculateChange = function() {
        var diff = self.stock.price - self.stock.previous;
        return Math.ceil((diff / self.stock.previous) * 100);
    };
    self.changeClass = function() {
        return {
            positive: self.stock.price >= self.stock.previous,
            negative: self.stock.price < self.stock.previous
        };
    };
}

angular.module('stockMarketApp')
    .directive('stockWidget', function() {
        return {
            scope: {},
            bindToController: {
                stock: '='
            },
            controller: StockController,
            controllerAs: 'stockCtrl',
            templateUrl: 'stock.html'
        };
    });