import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  ready: boolean = false;
  artista: any = {};
  topCanciones: any[] = [];

  constructor(private router: ActivatedRoute,
              private spotifyService: SpotifyService) { 

    this.router.params.subscribe(params =>{
      this.obtenerArtista(params['id']);
      this.obtenerTopCanciones(params['id']);
    })

  }

  obtenerArtista(id:string){

    this.spotifyService.getArtista(id)
        .subscribe(respuesta =>{
          this.artista = respuesta;
          this.ready = true;
        })

  }

  obtenerTopCanciones(id:string){
    this.spotifyService.getTopCanciones(id).subscribe( (respuesta:any) =>{
      console.log(respuesta);
      this.topCanciones = respuesta['tracks'];
    })
  }



}
