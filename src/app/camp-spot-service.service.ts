import { Injectable } from '@angular/core';
import { IProduct } from './camp-spot/camp-spot';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';




import * as moment from 'moment';

@Injectable()
export class CampSpotService {
  private _campInfoUrl = 'api/campInfo/campInfo.json';
  constructor(private _http: Http) { }

  getAvailableCamps() {
    return this._http.get(this._campInfoUrl)
      .map((response: Response) => response.json()) // <IProduct[]>
      .map((tripDate) => ({
        reservations: tripDate.reservations
          .map(reservation => Object.assign(
            {},
            reservation,
            {
              searchStartDate: tripDate.search.startDate,
              searchEndDate: tripDate.search.endDate
            }
          )
        )
      }))
      //.map((data,index) => (data.reservations[0]))
      .do(data => console.log('all: ' + JSON.stringify([data])))
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }

}
            //.map(data => [data.search].concat(data.reservations)
                  //.map(dates => ({dateList: Object.assign({}, dates.reservations, dates.newRes)}))

      //.filter( item => moment(item.resStart).isBefore(item.reservations) )
