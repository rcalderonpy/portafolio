import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[]=[];
  cargando:boolean = false;

  constructor( private http:Http ) {
    this.cargar_productos();
  }

  public cargar_productos(){

    this.cargando = true;
    this.http.get('https://paginaweb-dde1c.firebaseio.com/productos_idx.json')
        .subscribe( res => {
          this.cargando = false;
          this.productos = res.json();
          console.log(res.json());
        })

  }

}
