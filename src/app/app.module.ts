import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app/components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPartComponent } from './components/main-part/main-part.component';
import { ChampionsListButtonComponent } from './components/main-part/champions-list-button/champions-list-button.component';
import { RegionsMapComponent } from './components/main-part/regions-map/regions-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPartComponent,
    ChampionsListButtonComponent,
    RegionsMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
