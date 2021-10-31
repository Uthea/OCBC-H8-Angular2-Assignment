import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StaffComponent} from "./staff.component";
import {StaffService} from "./staff.service";
import {ModalModule} from "../modal/modal.module";



@NgModule({
  declarations: [
    StaffComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  providers: [
    StaffService
  ],
  exports: [
    StaffComponent
  ]
})
export class StaffModule { }
