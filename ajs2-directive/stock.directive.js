import {
    ComponentAnnotation as Component,
    ViewAnnotation as View
} from 'angular2/angular2';

@Component({
    selector: 'stock-widget',
    properties: ['stock']
})
@View({
    templateUrl: 'stock.html'
})
export class StockController {
    constructor() {}
    calculateChange() {
        var diff = this.stock.price - this.stock.previous;
        return Math.ceil((diff / this.stock.previous) * 100);
    }
    changeClass() {
        return {
            positive: this.stock.price >= this.stock.previous,
            negative: this.stock.price < this.stock.previous
        };
    }
}