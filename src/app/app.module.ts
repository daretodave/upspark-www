import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {RouterModule} from "@angular/router";
import {LandingModule} from "./landing/landing.module";
import {DownloadsModule} from "./downloads/downloads.module";
import {CoreModule} from "./core/core-module";

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        LandingModule,
        DownloadsModule,
        RouterModule.forRoot([])
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}