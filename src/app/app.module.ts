import { RecaptchaModule } from 'ng-recaptcha';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReCaptchaComponent } from './re-captcha/re-captcha.component';


@NgModule({
  declarations: [
    AppComponent,
    ReCaptchaComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
