import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TieredMenuModule } from 'primeng/tieredmenu';

import { AppComponent } from './app.component';
import { TargetComponent } from './target.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'target',
    component: TargetComponent
  }
];

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TieredMenuModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, TargetComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
