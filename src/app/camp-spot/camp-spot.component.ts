import { Component, OnChanges, OnInit } from '@angular/core';
import { IProduct} from './camp-spot';
import {CampSpotService} from '../camp-spot-service.service';

@Component({
  selector: 'app-camp-spot',
  templateUrl: './camp-spot.component.html',
  styleUrls: ['./camp-spot.component.css']
})
export class CampSpotComponent implements OnInit {
  errorMessage: string;
  campSites: IProduct[];

  constructor(private _CampSpotService: CampSpotService) {
  }

  ngOnInit(): void {

    this._CampSpotService.getAvailableCamps()
            .subscribe(campSites => this.campSites = campSites,
                      error => this.errorMessage = <any>error);
  }

}
