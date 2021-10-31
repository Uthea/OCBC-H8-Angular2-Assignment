import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap/modal";
import {Staff} from "../mock/staff";
import {StaffService} from "../staff/staff.service";
import {ModalContentComponent} from "./modal-content/modal-content.component";
import {Subscription} from "rxjs";
import {MessageService} from "../message/message.service";
import {Roles} from "../mock/roles";
import {FormValidationService} from "../form-validation/form-validation.service";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  bsModalRef? : BsModalRef;
  staff? : Staff;
  subscriptions: Subscription[] = [];
  button : string = "";


  constructor(private  modalService : BsModalService,
              private messageService : MessageService,
              public  formValidation : FormValidationService) { }

  openModalWithComponent(modalType : string, staff? : Staff) {
    let roles : Roles[] = [];
    this.formValidation.DataForm.setValue(
      {
        id : modalType !== "add" ? staff?.id : -1,
        title : modalType !== "add" ? staff?.title : "",
        firstName : modalType !== "add" ? staff?.firstName : "",
        lastName : modalType !== "add" ? staff?.lastName : "",
        role : modalType !== "add" ? staff?.role : "",
        email : modalType !== "add" ? staff?.email : "",
        password : "",
        confirmPassword : ""
      }
    )

    if(modalType !== "add")
    {
      roles  = [
        {name: 'Admin', value: 'Admin'},
        {name: 'User', value: 'User'}
      ]
    } else {
      roles  = [
        {name: 'Select a role', value : ""},
        {name: 'Admin', value: 'Admin'},
        {name: 'User', value: 'User'}
      ]
    }




    const initialState : ModalOptions = {
      initialState: {
        modalType: modalType,
        DataForm : this.formValidation.DataForm,
        roles : roles
      },
      id: modalType
    }


    this.bsModalRef = this.modalService.show(
      ModalContentComponent, initialState
    );

    if (this.bsModalRef?.onHidden) {
      this.subscriptions.push(
        this.bsModalRef.onHidden.subscribe(() => {
          if (this.button !== "cancel" && this.button !== "")
          {
            this.messageService.callComponentMethod();
            this.button = "";
          }
        })
      );
    }

  }

  onCancel()  : void {
    this.button = "cancel";
  }

  onOk() : void {
    this.button = "ok";
  }
}
