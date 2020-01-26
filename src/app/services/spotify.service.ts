import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getUltimosLanzamientos(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQALmHQat1ePPxyGz45BwBymvOTFO-wFRvHm6lcM2X1lgnDMxmk9qaUmopzag0qFxUe4yisH7VitArCO-bg'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=9', { headers });
  }

}
