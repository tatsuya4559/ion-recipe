import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Place } from "src/app/places/place.model";
import { CreateBookingComponent } from "./create-booking.component";

@Injectable({
  providedIn: 'root'
})
export class CreateBookingModalService {
  constructor(
    private modalCtrl: ModalController,
  ) {}

  async show(selectedPlace: Place) {
    const modal = await this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace },
    });
    modal.present();
    return modal.onDidDismiss();
  }
}
