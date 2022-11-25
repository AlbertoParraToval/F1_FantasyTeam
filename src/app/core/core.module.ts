import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './components/information/information.component';



@NgModule({
  declarations: [InformationComponent],
  imports: [
    CommonModule
  ],
  exports:[InformationComponent]
})
export class CoreModule { }
