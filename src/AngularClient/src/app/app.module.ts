import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

//import '../styles/styles.css';
import { AppComponent } from './app/app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './errors/404.component';
import { ROUTES } from './routes'
import { ToastrService } from './common/toastr.service';
import { AppConfiguration } from './common/appConfiguration';
import { RxJsDemo1Component } from './rxjs/demo1/rxjs.demo1.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavBarComponent,
        CounterComponent,
        RxJsDemo1Component,
        HomeComponent,
        Error404Component
        ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES, { enableTracing: true,useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    providers: [ 
        ToastrService, 
        AppConfiguration 
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

