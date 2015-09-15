import {ComponentMetadata as Component, ViewMetadata as View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'stock-widget',
    properties: ['stock']
})
@View({
    template: `<div class="stock-dash col-md-3">
    <span class="stock-name" >{{stock.name}}</span>
    <span class="stock-price">{{stock.price}}</span>
    <span class="stock-change"
          [class]="changeClass()">{{calculateChange()}} %</span>
</div>`,
    directives: [CORE_DIRECTIVES]
})
export class StockWidget {
    stock;
    constructor() {
    }
    changeClass() {
        return this.stock.price >= this.stock.previous ? 'positive' : 'negative';
    }
    calculateChange() {
        var diff = (this.stock.price - this.stock.previous) / this.stock.previous;
        return Math.ceil(diff * 100);
    }
}


