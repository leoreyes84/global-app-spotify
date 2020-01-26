import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getUltimosLanzamientos(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBIF1aqJMjzp0STO8TlLhq2Lo9yPCqrnMgOjy6bl0pxfd3rO4C-4CCff3k2JOZpRpP5B2Y31Cf9dVCVQa0'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=10', { headers });
  }

}
