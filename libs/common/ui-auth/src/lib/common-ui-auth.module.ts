import { CommonUiKitModule, CustomMaterialModule } from '@wseek/ui-kit';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredentialFormComponent } from './components/credential-form/credential-form.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';

@NgModule({
  imports: [CommonModule, CommonUiKitModule, CustomMaterialModule],
  declarations: [CredentialFormComponent, LoginPageComponent],
  exports: [CredentialFormComponent, LoginPageComponent],
})
export class CommonUiAuthModule {}
