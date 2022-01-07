import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
  ) {}

  onLogout() {
    this.authService.logout();
    this.navCtrl.navigateRoot('/auth');
  }
}
