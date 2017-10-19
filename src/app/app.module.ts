import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import * as $ from 'jquery';


import { AppComponent } from './app.component';
import { AfteralaunchComponent } from './afteralaunch/afteralaunch.component';
// import { LaunchComponent } from './launch/launch.component';

const appRoutes: Routes = [
  {path: 'afterlaunch', component: AfteralaunchComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AfteralaunchComponent,
    // LaunchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
