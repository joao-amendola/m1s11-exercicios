import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePhilipsPipe } from './pipes/capitalize-philips.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgcontentComponent } from './components/ngcontent/ngcontent.component';
import { NgifngelseComponent } from './components/ngifngelse/ngifngelse.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePhilipsPipe,
    NavbarComponent,
    NgforComponent,
    NgifComponent,
    NgcontentComponent,
    NgifngelseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
