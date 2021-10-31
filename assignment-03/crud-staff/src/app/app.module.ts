import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {ErrorHandlerModule} from "./error-handler/error-handler.module";
import {BsModalRef, ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormValidationModule} from "./form-validation/form-validation.module";
import {MessageModule} from "./message/message.module";
import {MockModule} from "./mock/mock.module";
import {StaffModule} from "./staff/staff.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ErrorHandlerModule,

    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {dataEncapsulation: false}
    // ),

    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FormValidationModule,
    MessageModule,
    MockModule,
    StaffModule,
    ModalModule
  ],
  providers: [
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
