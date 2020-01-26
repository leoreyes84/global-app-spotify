import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styles: []
})
export class LanzamientosComponent {

  nuevosLanzamientos: any[] = [];

  constructor(private spotifyService: SpotifyService,
              private router: Router) { 

    this.spotifyService.getUltimosLanzamientos()
        .subscribe((respuesta: any) =>{
          // console.log(respuesta.albums.items);
          this.nuevosLanzamientos =respuesta.albums.items
        });
    

  }

  mostrarArtista(idArtista:any){
    this.router.navigate(['artista', idArtista]);
  }

}
