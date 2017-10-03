import { Component } from '@angular/core';

@Component({
    selector: 'rxjs-demo1',
    templateUrl: './rxjs.demo1.component.html'
})
export class RxJsDemo1Component {

    public currentCount = 20;

    public incrementCounter() {
        this.currentCount++;
    }

}