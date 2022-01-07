import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
    this.navCtrl.navigateRoot('/places/tabs/discover');
  }

}
