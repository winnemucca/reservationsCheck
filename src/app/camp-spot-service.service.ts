import { Injectable } from '@angular/core';
import { IProduct } from './camp-spot/camp-spot';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';



import * as moment from 'moment';

@Injectable()
export class CampSpotService {
  private _campInfoUrl = 'api/campInfo/campInfo.json';
  constructor(private _http: Http) { }

  getAvailableCamps() {  // Observable<IProduct>
    return this._http.get(this._campInfoUrl)
      .map((response: Response) => response.json()) // <IProduct[]>
      .map(data => {
        return { ...data.reservations, ...data.search};
      })
      // .filter((tripDate, index ) => {
      //   console.log(tripDate, index, 'this is filter')
      //  return tripDate.search ? tripDate.search : false;
      //  // return tripDate;
      //   // return  tripDate === 'search' || tripDate === 'search';
      // })
      //.map(dates => ({dateList:dates.reservations}))
      //.map(dates => ({dateList: Object.assign({}, dates.res, dates.reservations )}))      
      .do(data => console.log('all: ' + JSON.stringify([data])))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }

}

      //.filter( item => moment(item.resStart).isBefore(item.reservations) )


// .map(item => (
      //   {
      //     tripLength: moment(item.search.endDate).diff(item.search.startDate, 'days'),
      //     gap: item.gapRules,
      //     reservations: item.reservations
      //   }) )