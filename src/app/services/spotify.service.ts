import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  urlService = 'https://api.spotify.com/v1';
  token = 'Bearer BQD6iL1d9oCdYJ4oXQEq3W9ZNLMe7y-p41Oq3vEqepliBIXdSxKnkOYq49lQNn8a9yTrN7d4ghMfJck_oFg';

  constructor(private http:HttpClient) { }

  getUltimosLanzamientos(){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });
    return this.http.get(this.urlService +'/browse/new-releases?limit=9', { headers });
  }

  getArtista( id: string ){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });
    return this.http.get(this.urlService +'/artists/'+id, { headers });
  }

  getTopCanciones( id: string ){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });
    return this.http.get(this.urlService +'/artists/'+id+'/top-tracks?country=es', { headers });
  }

}
