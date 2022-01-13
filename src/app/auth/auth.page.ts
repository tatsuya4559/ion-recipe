import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  async onLogin() {
    this.authService.login();
    await this.presentLoading();
    this.navCtrl.navigateRoot('/places/tabs/discover');

    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    //   this.navCtrl.navigateRoot('/places/tabs/discover');
    // }, 1500);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 1500,
    });
    await loading.present();
    await loading.onDidDismiss();
  }
}
