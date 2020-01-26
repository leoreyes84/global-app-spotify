import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent {

  constructor(private spotify: SpotifyService) {
    
    this.spotify.getUltimosLanzamientos();

   }

  

}
