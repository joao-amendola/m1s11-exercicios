import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePhilipsPipe } from './pipes/capitalize-philips.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgifComponent } from './components/ngif/ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePhilipsPipe,
    NavbarComponent,
    NgforComponent,
    NgifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
