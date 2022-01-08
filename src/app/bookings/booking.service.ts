import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { of, defer, concat, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
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

  get bookings() {
    return [...this._bookings];
  }

  set bookings(newBookings: Booking[]) {
    this._bookings = newBookings;
    this.bookingsChanged$.next();
  }


  constructor() { }

  bookingsChanged$ = new Subject<void>();

  bookings$ = concat(
    defer(() => of(this.bookings)), // 初回
    this.bookingsChanged$.pipe(map(() => this.bookings)) // 更新時
  );

  cancelBooking(bookingId: string) {
    this.bookings = this._bookings.filter(b => b.id !== bookingId);
  }
}
