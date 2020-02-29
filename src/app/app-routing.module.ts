import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationComponent} from './components/location/location.component';
import {CharacterComponent} from './components/character/character.component';
import {HomeComponent} from './components/home/home.component';
import {ListCharacterComponent} from './components/list-character/list-character.component';
import {ListLocationComponent} from './components/list-location/list-location.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'locations', component: ListLocationComponent},
  {path: 'characters', component: ListCharacterComponent},
  {path: 'character/:id', component: CharacterComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
