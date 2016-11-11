/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
  <div class="front" [ngStyle]="{'background-image': 'url(assets/img/mainbg3.png)'}">
  <md-toolbar layout="row" layout-align="center end" color="primary">
      <a class="logo">
        Angular 2 sample
      </a>
      <nav>
      <a md-button [routerLink]=" ['./'] ">
        Project README
      </a>
      <a md-button [routerLink]=" ['./home'] ">
        About Me
      </a>
      <a md-button [routerLink]=" ['./detail'] ">
        Github
      </a>
      <a md-button [routerLink]=" ['./about'] ">
        My Resume
      </a>
      <a md-button [routerLink]=" ['./contact'] ">
        Contact
      </a>
      </nav>
      <div class="outside">
        <a class="linkedin"><img src="assets/img/linkedin_icon.png" width="25px"></a>
        <a class="github"><img src="assets/img/github_icon.svg" width="25px"></a>
        <a class="email"><img src="assets/img/email_icon.png" width="25px"></a>
      </div>
  </md-toolbar>

    <main>
      <router-outlet></router-outlet>
    </main>
  </div>
  <footer class="current">
    <h3>Consultant at <span>Slalom Consulting</span></h3>
    <h3>Co-Founder of <span>DurmoDigital</span></h3>
  </footer>
  `
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  url = 'https://github.com/durmo11';
  mainBg = 'assets/img/maingbg.png'

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
