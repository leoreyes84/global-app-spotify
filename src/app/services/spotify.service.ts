import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  urlService = 'https://api.spotify.com/v1';
  token = 'Bearer BQB5LXE4YoR4BFBa4YsMZhA-Qx2PhrYiZcWnn4iYE4_03V6IePcA47K78bP53HbG140YzyO18phHXqx7LDI';

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
