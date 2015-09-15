System.register("stockWidget", ["angular2/angular2"], function($__export) {
  "use strict";
  var __moduleName = "stockWidget";
  var Component,
      View,
      CORE_DIRECTIVES,
      StockWidget;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentMetadata;
      View = $__m.ViewMetadata;
      CORE_DIRECTIVES = $__m.CORE_DIRECTIVES;
    }],
    execute: function() {
      StockWidget = function() {
        function StockWidget() {}
        return ($traceurRuntime.createClass)(StockWidget, {
          changeClass: function() {
            return this.stock.price >= this.stock.previous ? 'positive' : 'negative';
          },
          calculateChange: function() {
            var diff = (this.stock.price - this.stock.previous) / this.stock.previous;
            return Math.ceil(diff * 100);
          }
        }, {});
      }();
      $__export("StockWidget", StockWidget);
      Object.defineProperty(StockWidget, "annotations", {get: function() {
          return [new Component({
            selector: 'stock-widget',
            properties: ['stock']
          }), new View({
            template: "<div class=\"stock-dash col-md-3\">\n    <span class=\"stock-name\" >{{stock.name}}</span>\n    <span class=\"stock-price\">{{stock.price}}</span>\n    <span class=\"stock-change\"\n          [class]=\"changeClass()\">{{calculateChange()}} %</span>\n</div>",
            directives: [CORE_DIRECTIVES]
          })];
        }});
    }
  };
});
