import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordMatchingValidator} from "./password-matching-validator";

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  public DataForm  = new FormGroup({
    id : new FormControl(),
    title : new FormControl('', [Validators.required]),
    firstName : new FormControl('', [Validators.required]),
    lastName : new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, {validators: passwordMatchingValidator});

}
