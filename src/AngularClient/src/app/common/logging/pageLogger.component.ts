import { Component, OnDestroy } from '@angular/core';
import { PageLoggerService } from "./pageLogger.service";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'page-logger',
  template: `
   <pre>
      <p *ngFor="let msg of history">{{msg}}</p>
   </pre>
   `
})
export class PageLoggerComponent implements OnDestroy {

    history: string[] = [];
    subscription: Subscription;

  constructor(public loggerService: PageLoggerService) { 
      this.subscription = loggerService.logStream$.subscribe(
      msg => {
        this.history.push(msg);
      });
   }

    public ngOnInit() {
        //this.loggerService.log("hello...")
        //this.ingredientService.getHops().subscribe( data => this.hopdata = data);
        //this.ingredientService.getHops2( (data) => this.hopdata = data);
        //console.log(this.hopdata);
    }

    ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
 
}