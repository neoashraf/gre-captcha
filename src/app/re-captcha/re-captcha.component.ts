import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-re-captcha',
  templateUrl: './re-captcha.component.html',
  styleUrls: ['./re-captcha.component.css']
})
export class ReCaptchaComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }


  onLoginSubmit(): void {
    console.log("success");
  }

  recaptchaStr = '';
  onLoginClick(captchaRef: any): void {
    if (this.recaptchaStr) {
      captchaRef.reset();
    }
    captchaRef.execute();
  }

  public resolved(captchaResponse: string): void {
    this.recaptchaStr = captchaResponse;
    if (this.recaptchaStr) {
      this.onLoginSubmit();
    }
  }

}
