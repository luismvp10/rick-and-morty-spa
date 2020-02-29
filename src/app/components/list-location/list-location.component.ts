import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../services/location/location.service';
import {forEach} from '@angular/router/src/utils/collection';
import {CharacterService} from '../../services/character/character.service';
import {delay, take} from 'rxjs/operators';
import {forkJoin, of, interval, Observable} from 'rxjs';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.css']
})
export class ListLocationComponent implements OnInit {
  currentPage: number = 1;
  order: any[];
  locations: any = [];
  residentsUrl:any = [];
  residents: any [];
  totalPages: number = 0;
  params: any = [];
  /*Filters*/
  nameDimension: string;
  type: string;
  nameLocation: string;



  constructor(private locationService: LocationService, private characterService: CharacterService) { }

  ngOnInit() {
    this.getLocations(this.currentPage);
  }

  getLocations(numerPage: number) {
    this.params.push({
      page: this.currentPage,
      name: this.nameLocation,
      type: this.type,
      dimension: this.nameDimension
    });
    this.locations = [];
    this.locationService.getLocations(this.params)
      .subscribe((data: any) => {
        this.totalPages = data.info.pages;
        this.locations = data.results;
      });
  }

  pagination(page: number) {

    if (page === -1 ) {
    } else if (page === -2) {
      this.currentPage = this.currentPage + 1;
    } else {
      this.currentPage =  page;
    }
    this.params = [];
    this.getLocations(this.currentPage);
  }

  counter(i: number) {
    return new Array(i);
  }


  changeName(value) {
    this.nameLocation= value;
    this.params = [];

    this.getLocations(this.currentPage);
  }
  changeType(value) {
    this.type = value;
    this.params = [];

    this.getLocations(this.currentPage);
  }
  changeDimension(value) {
    this.nameDimension = value;
    this.params = [];

    this.getLocations(this.currentPage);
  }

  getResidentes(id: number) {

    this.residentsUrl = this.locations[id].residents;
    const observablesList = [];
    this.residentsUrl.forEach( element =>  {

   observablesList.push(this.characterService.getOneCharacter(element));
   });
    forkJoin(observablesList).subscribe(results => {
      this.residents = results;
    });

  }



}
