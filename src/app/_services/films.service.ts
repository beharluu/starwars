import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Film } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(
    private http: HttpClient
  ) { }

  getFilms( args?: {
    page?: number;
    search?: any;
  }
  ): Observable<any> {
    const query = [];
    if ( args && args.search) { query.push(`search=${args.search}`); }
    if ( args && args.page) { query.push(`page=${args.page}`); }

    const queryString = query.length > 0 ? '?' + query.join('&') : '';
    return this.http.get<Film[]>(`${environment.apiUrl}films/${queryString}`).pipe(
      map (
        (res: any) => {
          const films = res.results.map( (character: Film) => {
            return new Film(character);
          });
          return { totalCount: res.count, films };
        },
        (err: any) => {
          return err;
        }
      )
    );
  }

  getFilmById(id: string): Observable<Film> {
    return this.http.get<Film>(`${environment.apiUrl}films/${id}`).pipe(
      map (
        (res: any) => {
          return new Film(res);
        },
        (err: any) => {
          return err;
        }
      )
    );
  }
}
