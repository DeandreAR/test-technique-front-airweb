import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataMobilityService {

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<any> {
    return this.http.get(environment.airwebApi + 'categories').pipe(
      map((result) => {
        return result;
      }))
  }

  public getSelectedCategorie(id): Observable<any> {
    return this.http.get(environment.airwebApi + 'categories/' + id ).pipe(
      map((result) => {
        return result;
      }))
  }

  public getProducts(): Observable<any> {
    return this.http.get(environment.airwebApi + 'categories').pipe(
      map((result) => {
        return result;
      }))
  }

  public getSelectedProduct(id): Observable<any> {
    return this.http.get(environment.airwebApi + 'categories/' + id ).pipe(
      map((result) => {
        return result;
      }))
  }
}
