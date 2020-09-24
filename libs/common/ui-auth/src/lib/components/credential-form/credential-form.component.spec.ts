import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialFormComponent } from './credential-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CredentialFormComponent', () => {
  let component: CredentialFormComponent;
  let fixture: ComponentFixture<CredentialFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CredentialFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(CredentialFormComponent);
    component = fixture.componentInstance;
  });

  it('should compile', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should disable form if pending', () => {
    component.pending = true;

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should display error message if provided', () => {
    component.errorMessage = 'Credenciais inválidas';

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should emit an event if the form is valid when submitted', () => {
    const credentials = {
      email: 'seek@ubuntu.gui',
      password: '123456',
    };
    component.form.setValue(credentials);

    spyOn(component.submitted, 'emit');
    component.submit();

    expect(component.submitted.emit).toHaveBeenCalledWith(credentials);
  });
});
