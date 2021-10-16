import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  constructor( private MoviesService: MoviesService) { }

  ngOnInit () {
    this.MoviesService.getPeliculaDetalle(this.id).subscribe( resp =>{
      console.log(resp);
      this.pelicula = resp;
    });

    this.MoviesService.getActoresPelicula(this.id).subscribe( resp =>{
      console.log(resp);
    });

  }

  ngOnInit() {}

}
