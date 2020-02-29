import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent} from './components/shared/navbar/navbar.component';
import { LocationComponent } from './components/location/location.component';
import { CharacterComponent } from './components/character/character.component';
import { HomeComponent } from './components/home/home.component';

////Services
import {LocationService} from './services/location/location.service';
import {CharacterService} from './services/character/character.service';
import { ListCharacterComponent } from './components/list-character/list-character.component';
import { ListLocationComponent } from './components/list-location/list-location.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NotResultsComponent } from './components/shared/not-results/not-results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LocationComponent,
    CharacterComponent,
    HomeComponent,
    ListCharacterComponent,
    ListLocationComponent,
    LoadingComponent,
    NotResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CharacterService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
