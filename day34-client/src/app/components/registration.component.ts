import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Registration } from '../models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  registrationForm!: FormGroup;

  @Output()
  onRegister = new Subject<Registration>();

  ngOnInit(): void {
    this.registrationForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      name: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: this.fb.control<string>('', [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  hasError(): boolean {
    return this.registrationForm.invalid;
  }

  processForm() {
    console.info('Form submitted >>>> ', this.registrationForm.value);
    this.onRegister.next(this.registrationForm.value as Registration);
    this.registrationForm = this.createForm();
  }
}
