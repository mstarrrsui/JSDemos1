import { Component } from '@angular/core';
import { PageLoggerService } from "../../common/logging/pageLogger.service";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/range';
import 'rxjs/add/operator/delay';

@Component({
    selector: 'rxjs-demo1',
    templateUrl: './rxjs.demo1.component.html'
})
export class RxJsDemo1Component {

    subscription: Subscription;

    constructor(public loggerService: PageLoggerService) {
        //var clicks = Observable.fromEvent(document, 'click');
        var timer = Observable.range(1,5).delay(2000);
        //var clicksOrTimer = clicks.merge(timer);
        this.subscription = timer.subscribe(x => this.loggerService.log(x.toString()));
    }


    public sendMsg() {
        this.loggerService.log("another one...");    
    }

    public ngOnInit() {
        this.loggerService.log("hello there...");
    }

}