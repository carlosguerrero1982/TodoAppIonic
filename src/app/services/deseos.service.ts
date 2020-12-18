import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas:Lista[]=[];

  lista:Lista;

  constructor() {

    this.cargarStorage();
    //const lista1 = new Lista('Recoletar piedras');
    //const lista2 = new Lista('Heroes para recoger');

    //this.listas.push(lista1,lista2);

  //  console.log(this.listas);
   }

   crearLista(titulo:string){

    const nuevalista = new Lista(titulo);
    this.lista=nuevalista;
    this.listas.push(nuevalista);
    this.guardarStorage();

    return nuevalista.id;
   }

   obtenerId(id:any){

    return this.lista['id'];

   }

   obtenerLista(id:string | number){

    id= Number(id);

    

    return this.listas.find(list =>list.id === id );

  

   }

   guardarStorage(){

    localStorage.setItem('data',JSON.stringify(this.listas));

   }

   cargarStorage(){


    if(localStorage.getItem('data')){

  this.listas=JSON.parse(localStorage.getItem('data'));

    }else{

      this.listas=[];
    }

   }

   borrarLista(lista:Lista){

   this.listas= this.listas.filter(listaData=>{
      return listaData.id!==lista.id;
    });

    this.guardarStorage();
   }
}
