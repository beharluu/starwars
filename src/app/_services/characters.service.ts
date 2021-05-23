import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from '../_models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters( args?: {
    page?: number;
    search?: any;
  }
  ): Observable<any> {
    const query = [];
    if ( args && args.search) { query.push(`search=${args.search}`); }
    if ( args && args.page) { query.push(`page=${args.page}`); }

    const queryString = query.length > 0 ? '?' + query.join('&') : '';
    return this.http.get<Character[]>(`${environment.apiUrl}people/${queryString}`).pipe(
      map (
        (res: any) => {
          const characters = res.results.map( (character: Character) => {
            return new Character(character);
          });
          return { totalCount: res.count, characters };
        },
        (err: any) => {
          return err;
        }
      )
    );
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${environment.apiUrl}people/${id}`).pipe(
      map (
        (res: any) => {
          return new Character(res);
        },
        (err: any) => {
          return err;
        }
      )
    );
  }


}
