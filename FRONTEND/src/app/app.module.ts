import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { FilterPipe } from './recherche/filter.pipe';
import { RechercheComponent } from './recherche/recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    FilterPipe,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
