import {
  RecaptchaModule,
  RECAPTCHA_SETTINGS,
  RecaptchaSettings,
  RecaptchaLoaderService,
  RECAPTCHA_LANGUAGE
} from 'ng-recaptcha';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReCaptchaComponent } from './re-captcha/re-captcha.component';

const globalSettings: RecaptchaSettings = { siteKey: '6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU' };
@NgModule({
  declarations: [
    AppComponent,
    ReCaptchaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RecaptchaModule.forRoot()
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: globalSettings,
    }
    , {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'en', // use French language
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
