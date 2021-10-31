import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalContentComponent} from "./modal-content/modal-content.component";
import {ModalService} from "./modal.service";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ModalContentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    ModalService
  ],
  exports: [
    ModalContentComponent
  ]
})
export class ModalModule { }
