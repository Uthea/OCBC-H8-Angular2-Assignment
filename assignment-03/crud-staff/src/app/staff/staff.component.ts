import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {StaffService} from "./staff.service";
import {Staff} from "../mock/staff";
import {ModalService} from "../modal/modal.service";
import {Observable} from "rxjs";
import {MessageService} from "../message/message.service";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staff : Staff[] = [];
  constructor(private staffService : StaffService,
              private modal : ModalService,
              private messageService : MessageService
  ) { }

  @Input() state : any;

  ngOnInit(): void {
    this.getAllStaff();

    this.messageService.componentMethodCalled$.subscribe(() => {
      this.getAllStaff();
    });
  }


  getAllStaff() : void {
    this.staffService.getAllStaff()
      .subscribe(allStaff => this.staff = allStaff);

    console.log("fetch staff");
  }

  // getStaff(id : number) : void {
  //   this.staffService.getAllStaff()
  //     .subscribe(staff => this.staff = staff);
  // }

  openModal(modalType : string, staff? : Staff) {
     this.modal.openModalWithComponent(modalType, staff);
  }

}
