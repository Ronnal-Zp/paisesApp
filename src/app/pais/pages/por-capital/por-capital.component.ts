import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  constructor(private paisService: PaisService) { }



  termino         : string = "";
  hayError        : boolean = false;
  paisesMostrar   : Pais[] = []; 

  buscar(termino: any){
    this.termino = termino;
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarCapital(this.termino)
      .subscribe( (paises) => {
        console.log(paises);
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
