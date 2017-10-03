import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './errors/404.component';
import { RxJsDemo1Component } from './rxjs/demo1/rxjs.demo1.component';

export const ROUTES: Routes = [
    { path: '404', component: Error404Component },
    { path: 'home', component: HomeComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'rxjsdemo1', component: RxJsDemo1Component },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
