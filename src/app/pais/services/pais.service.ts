import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService implements OnInit{

  constructor(
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    
  }  




  urlBase: string = "https://restcountries.com/v3.1/"


  buscarPais(termino: string): Observable<Pais[]>{
    const url: string = `${ this.urlBase }name/${ termino }`;

    return this.http.get<Pais[]>(url)
  }


  buscarCapital(termino: string): Observable<Pais[]>{
    const url: string = `${ this.urlBase }capital/${ termino }`;

    return this.http.get<Pais[]>(url);
  }


  getPaisPorId(codigo: string){
    const url: string = `${ this.urlBase }alpha/${ codigo }`;
    
    return this.http.get<Pais>(url);
  }


}
