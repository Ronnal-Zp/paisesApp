import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Pais } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{

  pais!: Pais;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisServices: PaisService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({id}) => this.paisServices.getPaisPorId(id)),
        tap( console.log )
      )
      .subscribe((res: any) => {
        this.pais = res[0]
      })
  }


}
