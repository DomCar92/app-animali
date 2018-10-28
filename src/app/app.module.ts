import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { listaCaniComponent } from './listaCani/listaCani.component';
import { listaFurettiComponent } from './listaFuretti/listaFuretti.component';
import { AnimaliComponent } from './animali/animali.component';

import { Routes, RouterModule } from '@angular/router';

export const cosoRouter: Routes =[
  {
    path: 'cani',
    component: listaCaniComponent
  },
  {
    path: 'furetti',
    component: listaFurettiComponent
  }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, RouterModule.forRoot(cosoRouter, { enableTracing: false, onSameUrlNavigation: 'reload' })],
  declarations: [ AppComponent, HelloComponent, listaCaniComponent, listaFurettiComponent, AnimaliComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
