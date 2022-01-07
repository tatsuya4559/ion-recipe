import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CreateBookingComponent } from "./create-booking.component";

@Injectable({
  providedIn: 'root'
})
export class CreateBookingModalService {
  constructor(
    private modalCtrl: ModalController,
  ) {}

  async show() {
    const modal = await this.modalCtrl.create({
      component: CreateBookingComponent,
    });
    modal.present();
    return modal.onDidDismiss();
  }
}
