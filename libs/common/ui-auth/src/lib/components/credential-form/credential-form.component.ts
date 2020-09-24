import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const Validator = {
  email: [Validators.required, Validators.email],
  password: [Validators.required, Validators.minLength(6)],
};

@Component({
  selector: 'seek-credential-form',
  templateUrl: './credential-form.component.html',
  styleUrls: ['./credential-form.component.scss'],
})
export class CredentialFormComponent {
  @Input() set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input() errorMessage!: string | null;

  @Output() submitted = new EventEmitter<Credential>();

  form: FormGroup = new FormGroup({
    email: new FormControl('', Validator.email),
    password: new FormControl('', Validator.password),
  });

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
