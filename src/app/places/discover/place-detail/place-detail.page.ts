import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  onBookPlace() {
    // angularのルーターはモバイルのページスタックを考慮していないから必ず先に進む
    // this.router.navigate(['/places/tabs/discover']);
    // navCtrlを使えばstackを戻るのか進むのか指定できる
    this.navCtrl.navigateBack('/places/tabs/discover');
  }

}
