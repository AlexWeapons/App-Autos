import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { MarcasComponent } from './marcas/marcas.component';
import { SubmarcasComponent } from './submarcas/submarcas.component';
import { MarcaService } from './marcas/marca.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    MarcasComponent,
    SubmarcasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MarcaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
