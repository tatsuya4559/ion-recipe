import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Tokyo Mansion', 'In the heart of Tokyo', 'https://photosrp.dotproperty.com.ph/1.0-PH-21074-PJ-10814-1702704720575f729a111c2-1-525-325/tokyo-mansions-south-forbes.jpg', 100_000),
    new Place('p2', 'Tokyo Old Apartment', 'Too old', 'https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2016/02/akasaka-house_gdl.jpg', 500),
    new Place('p3', 'Tokyo New Apartment', '1K for rent', 'http://resources.realestate.co.jp/wp-content/uploads/2020/04/real-estate-japan-hidden-gem-tokyo-neighborhoods-iriya-yadoya-1k-short-term-apartment.jpg', 7_000),
  ];

  constructor() { }

  get places() {
    return [...this._places];
  }
}
