import { Component } from '@angular/core';
import { PageLoggerService } from "../../common/logging/pageLogger.service";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/range';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/delay';

@Component({
    selector: 'rxjs-demo1',
    templateUrl: './rxjs.demo1.component.html'
})
export class RxJsDemo1Component {

    private timer: Observable<number>; 
    subscription: Subscription;

    constructor(public loggerService: PageLoggerService) {
        //var clicks = Observable.fromEvent(document, 'click');
        this.timer = Observable.interval(2000);
        //var clicksOrTimer = clicks.merge(timer);
    }


    public sub() {
        this.subscription = this.timer.subscribe(x => this.loggerService.log(x.toString()));    
    }

    public unsub() {
        this.subscription.unsubscribe();
    }

}