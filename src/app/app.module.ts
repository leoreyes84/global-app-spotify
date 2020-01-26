import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from'@angular/common/http';

import { AppComponent } from './app.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { LanzamientosComponent } from './components/lanzamientos/lanzamientos.component';
import { NavbarComponent } from './components/compartido/navbar/navbar.component';
import { ROUTES } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    NavbarComponent,
    LanzamientosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash:true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
