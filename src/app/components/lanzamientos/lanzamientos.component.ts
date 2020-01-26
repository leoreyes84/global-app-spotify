import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styles: []
})
export class LanzamientosComponent {

  nuevosLanzamientos: any[] = [];

  constructor(private spotifyService: SpotifyService) { 

    this.spotifyService.getUltimosLanzamientos()
        .subscribe(respuesta =>{
          
        });
    

  }

  

}
