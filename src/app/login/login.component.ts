import {Component, OnInit} from '@angular/core';
import {OAuth2Provider} from 'electron-oauth-helper';
import {ipcRenderer} from 'electron';
import {remote} from 'electron';
import {auth} from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private config;
  private provider: OAuth2Provider;
  public msg = 'ABC';

  constructor() {
  }

  ngOnInit() {
    this.config = {
      client_id: '532313926052-lbaqqmpgoaeqs47h37279i67fq3hgru9.apps.googleusercontent.com',
      client_secret: '-F9hrcj52184FS0CGUvultAW',
      redirect_uri: 'https://zync-007.firebaseapp.com/__/auth/handler',
      authorize_url: 'https://accounts.google.com/o/oauth2/v2/auth',
      response_type: 'token',
      scope: 'https://www.googleapis.com/auth/userinfo.profile',
    };
    this.provider = new OAuth2Provider(this.config);
  }

  public async login() {

    const options = Object.assign({
      show: false,
      width: 800,
      height: 800,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
      },
    });
    const win = new remote.BrowserWindow(options);
    win.once('ready-to-show', () => {
      win.show();
    });
    const x = await this.provider.perform(win);
    console.log('login?');
    console.log(x);
  }
}
