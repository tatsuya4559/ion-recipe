import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingModalService } from 'src/app/bookings/create-booking/create-booking.modal.service';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private createBookingModal: CreateBookingModalService,
    private placesService: PlacesService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  async onBookPlace() {
    // angularのルーターはモバイルのページスタックを考慮していないから必ず先に進む
    // this.router.navigate(['/places/tabs/discover']);
    // navCtrlを使えばstackを戻るのか進むのか指定できる
    // this.navCtrl.navigateBack('/places/tabs/discover');
    await this.createBookingModal.show(this.place);
  }

}
