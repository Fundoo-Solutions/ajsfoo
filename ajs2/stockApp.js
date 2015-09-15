import {ComponentMetadata as Component, ViewMetadata as View, bootstrap, CORE_DIRECTIVES, NgFor} from 'angular2/angular2';
import {StockWidget as StockWidget} from 'stockWidget';
import {Http, HTTP_BINDINGS} from 'angular2/http'

@Component({
    selector: 'stock-app'
})
@View({
    template: `<div class="row">
    <div *ng-for="#stock of stocks">
        <stock-widget [stock]="stock"></stock-widget>
    </div>
</div>`,
    directives: [CORE_DIRECTIVES, StockWidget, NgFor]
})
export class StockApp {
    stocks;
    constructor(http: Http) {
        this.stocks = [];
        http.get('/api/stocks').toRx().map(res => res.json()).subscribe(stocks => this.stocks = stocks);
    }
}

bootstrap(StockApp, [HTTP_BINDINGS]);
