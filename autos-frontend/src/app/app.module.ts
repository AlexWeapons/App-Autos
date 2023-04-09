import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { MarcasComponent } from './marcas/marcas.component';
import { SubmarcasComponent } from './submarcas/submarcas.component';
import { MarcaService } from './marcas/marca.service';
//import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ModelosComponent } from './modelos/modelos.component';
import { DescripcionesComponent } from './descripciones/descripciones.component';
import { SubmarcaService } from './submarcas/submarca.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    MarcasComponent,
    SubmarcasComponent,
    ModelosComponent,
    DescripcionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    //RouterModule.forRoot(routes)
  ],
  providers: [
    MarcaService,
    SubmarcaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
