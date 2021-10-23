import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;

  slidesOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor( private moviesService: MoviesService, private modalCtrl: ModalController) { }

  ngOnInit () {
   this.moviesService.getPeliculaDetalle(this.id).subscribe( resp =>{
    console.log(resp);
     this.pelicula = resp;
   });

   this.moviesService.getActoresPelicula(this.id).subscribe( resp =>{
    console.log(resp);
    this.actores = resp.cast;
    });

  }

  regresar(){
    this.modalCtrl.dismiss();
  }

  

}
