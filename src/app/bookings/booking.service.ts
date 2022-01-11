import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { of, defer, concat, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstractResource } from '../common/resources/abstract-resources';

const bookings: Booking[] = [
  {
    id: 'hoge',
    placeId: 'p1',
    placeTitle: 'Tokyo Mansion',
    guestNumber: 100,
    userId: 'kato',
  },
  {
    id: 'fuga',
    placeId: 'p2',
    placeTitle: 'Osaka Mansion',
    guestNumber: 11,
    userId: 'sato',
  }
];

@Injectable({
  providedIn: 'root'
})
export class BookingService extends AbstractResource<Booking[]> {
  constructor() {
    super();
    this.resource = [...bookings];
  }

  cancelBooking(bookingId: string) {
    this.resource = this.resource.filter(b => b.id !== bookingId);
  }
}
