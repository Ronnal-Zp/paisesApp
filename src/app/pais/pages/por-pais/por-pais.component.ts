import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ ]
})
export class PorPaisComponent {

  constructor(private paisService: PaisService) { }

  termino         : string = "";
  hayError        : boolean = false;
  paisesMostrar   : Pais[] = [];

  buscar(termino: any){
    this.termino = termino;
    this.hayError = false;
    //console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        //console.log(paises);
        this.paisesMostrar = paises;
      }, (err)=>{
        this.hayError = true;
        this.paisesMostrar = [];
      })
  }

  sugerencias(event: any){
    this.hayError = false;
  }

}
