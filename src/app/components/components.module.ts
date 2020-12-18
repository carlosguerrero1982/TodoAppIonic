import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { FiltroPipe } from '../pipes/filtro.pipe';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [ListasComponent],
  exports:[
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
