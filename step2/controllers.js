function MainController() {
    var self = this;
    self.stocks = [
        {id: "TWTR", name: "Twitter Inc", price: 80, previous: 70},
        {id: "FB", name: "Facebook Inc", price: 54, previous: 58},
        {id: "GOOG", name: "Google Inc", price: 105, previous: 100}
    ];
}

angular.module('stockMarketApp')
    .controller('MainCtrl', MainController);