import { Component, OnInit } from '@angular/core';
import { IonItemSliding, NavController } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];

  constructor(
    private placesService: PlacesService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.offers = this.placesService.places;
  }

  async onEdit(offerId: string, slidingItem: IonItemSliding) {
    await slidingItem.close();
    this.navCtrl.navigateForward(`/places/tabs/offers/edit/${offerId}`);
  }
}
