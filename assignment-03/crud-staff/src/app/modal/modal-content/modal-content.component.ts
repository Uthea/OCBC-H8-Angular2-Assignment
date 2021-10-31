import {Component, OnInit} from '@angular/core';
import {Staff} from "../../mock/staff";
import {BsModalRef} from "ngx-bootstrap/modal";
import {StaffService} from "../../staff/staff.service";
import {ModalService} from "../modal.service";
import {FormGroup} from "@angular/forms";
import {Roles} from "../../mock/roles";

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
  modalType: string = "";

  DataForm?: FormGroup;
  roles? : Roles[];

  constructor(public bsModalRef: BsModalRef,
              private staffService: StaffService,
              private modalService: ModalService) {
  }

  ngOnInit(): void {
  }

  save(staff: Staff) {
    this.staffService.updateStaff(staff)
      .subscribe(() => {
      });

    this.bsModalRef.hide();
  }

  add(staff: Staff) {
    this.staffService.createStaff(staff)
      .subscribe(() => {
      });

    this.bsModalRef.hide();
  }


  delete(id: number) {
    this.staffService.deleteStaff(id)
      .subscribe(() => {
      });

    this.bsModalRef.hide();
  }


  btnOnCancel() {
    this.DataForm!.markAsPristine();
    this.modalService.onCancel();
    this.bsModalRef.hide();
  }

  btnOnSave() {
    this.checkOnInput();
    if (!this.DataForm!.valid) {
      return false;
    } else {
      this.DataForm!.markAsPristine();
      // console.log()
      this.save(this.DataForm!.value);
      this.modalService.onOk();
      return true;
    }

  }

  btnOnAdd() {
    this.checkOnInput();
    if (this.DataForm?.invalid) {
      return false;
    } else {
      this.DataForm!.markAsPristine();
      this.add(this.DataForm!.value);
      this.modalService.onOk();
      return true;
    }
  }

  btnOnDelete(id: number) {
    this.delete(id);
    this.modalService.onOk();
  }

  checkOnInput() {
    if(this.title?.invalid) {
      this.title?.markAsDirty()
    }

    if(this.firstName?.invalid) {
      this.firstName?.markAsDirty()
    }

    if(this.lastName?.invalid) {
      this.lastName?.markAsDirty()
    }

    if(this.role?.invalid) {
      this.role?.markAsDirty()
    }

    if(this.email?.invalid) {
      this.email?.markAsDirty()
    }

    if(this.password?.invalid) {
      this.password?.markAsDirty()
    }

    if(this.confirmPassword?.invalid) {
      this.confirmPassword?.markAsDirty()
    }

  }

  get title () {
    return this.DataForm?.get('title');
  }

  get firstName () {
    return this.DataForm?.get('firstName');
  }

  get lastName () {
    return this.DataForm?.get('lastName');
  }

  get role () {
    return this.DataForm?.get('role');
  }

  get email () {
    return this.DataForm?.get('email');
  }

  get password () {
    return this.DataForm?.get('password');
  }

  get confirmPassword () {
    return this.DataForm?.get('confirmPassword');
  }




}

