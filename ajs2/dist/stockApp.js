System.register("stockApp", ["angular2/angular2", "stockWidget", "angular2/http"], function($__export) {
  "use strict";
  var __moduleName = "stockApp";
  var Component,
      View,
      bootstrap,
      CORE_DIRECTIVES,
      NgFor,
      StockWidget,
      Http,
      HTTP_BINDINGS,
      StockApp;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentMetadata;
      View = $__m.ViewMetadata;
      bootstrap = $__m.bootstrap;
      CORE_DIRECTIVES = $__m.CORE_DIRECTIVES;
      NgFor = $__m.NgFor;
    }, function($__m) {
      StockWidget = $__m.StockWidget;
    }, function($__m) {
      Http = $__m.Http;
      HTTP_BINDINGS = $__m.HTTP_BINDINGS;
    }],
    execute: function() {
      StockApp = function() {
        function StockApp(http) {
          var $__4 = this;
          this.stocks = [];
          http.get('/api/stocks').toRx().map(function(res) {
            return res.json();
          }).subscribe(function(stocks) {
            return $__4.stocks = stocks;
          });
        }
        return ($traceurRuntime.createClass)(StockApp, {}, {});
      }();
      $__export("StockApp", StockApp);
      Object.defineProperty(StockApp, "annotations", {get: function() {
          return [new Component({selector: 'stock-app'}), new View({
            template: "<div class=\"row\">\n    <div *ng-for=\"#stock of stocks\">\n        <stock-widget [stock]=\"stock\"></stock-widget>\n    </div>\n</div>",
            directives: [CORE_DIRECTIVES, StockWidget, NgFor]
          })];
        }});
      Object.defineProperty(StockApp, "parameters", {get: function() {
          return [[Http]];
        }});
      bootstrap(StockApp, [HTTP_BINDINGS]);
    }
  };
});
