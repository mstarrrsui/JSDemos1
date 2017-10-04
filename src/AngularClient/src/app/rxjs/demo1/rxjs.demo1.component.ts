import { Component } from '@angular/core';
import { PageLoggerService } from "../../common/logging/pageLogger.service";

@Component({
    selector: 'rxjs-demo1',
    templateUrl: './rxjs.demo1.component.html',
    providers: [PageLoggerService]
})
export class RxJsDemo1Component {

    public currentCount = 20;

    constructor(public loggerService: PageLoggerService) {
    }

    public incrementCounter() {
        this.currentCount++;
    }

    public sendMsg() {
        this.loggerService.log("another one...");    
    }

    public ngOnInit() {
        this.loggerService.log("hello there...");
    }

}