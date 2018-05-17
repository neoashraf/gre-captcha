import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-re-captcha',
//   templateUrl: './re-captcha.component.html',
//   styleUrls: ['./re-captcha.component.css']
// })
// export class ReCaptchaComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

@Component({
  selector: 'app-re-captcha',
  template: `<re-captcha (resolved)="resolved($event)" siteKey="6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU"></re-captcha>`,
}) export class ReCaptchaComponent {
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}