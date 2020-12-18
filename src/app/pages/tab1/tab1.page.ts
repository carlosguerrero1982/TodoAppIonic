import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from '../../services/deseos.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosService:DeseosService,
    private router:Router,private alertcontroller:AlertController) {
      
    }

    async agregarLista(){

    //  this.router.navigateByUrl('tabs/tab1/agregar');
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        id: 'titulo',
        placeholder: 'Agregar lista'
      }],
      buttons: [ 
        
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if(data.length===0){
              return;
            }else{
              this.deseosService.crearLista(data['titulo']);
              const listaId=this.deseosService.obtenerId(data['id']);
              this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
            }
          }
        }
      ]
    });

    await alert.present();
}

//listaSeleccionada(lista:Lista){

 // this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
//}


}
