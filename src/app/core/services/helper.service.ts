import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })


// Get formatted Address

export class HelperService {
  constructor(private http: HttpClient) { }
  private GOOGLE_MAPS_API_KEY = 'AIzaSyA_eWdbyZ8ZtNBuuuSty4PSpnArQ_5wOtk';

  getAddressFromCoordinates(latitude: string, longitude: string): Observable<string> {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${this.GOOGLE_MAPS_API_KEY}`;

    return this.http.get<any>(url).pipe(
      map(response => {
        if (response.status === 'OK') {
          return response?.results?.[0]?.formatted_address;
        } else {
          throw new Error('Address not found');
        }
      }),
      catchError(error => {
        throw new Error('Error fetching address: ' + error.message);
      })
    );
  }

  // Open Google Map

  openGoogleMaps(location: { lat: string, lng: string }) {
    const googleMapsUrl = `https://www.google.com/maps?q=${location.lat},${location.lng}`;
    window.open(googleMapsUrl, '_blank'); // Opens the map in a new tab
  }

  // Sorting Column

  sortData(orgArray: any, sortBy: string, dir: string) {
    orgArray.sort((a: object, b: object) => {
      const valueA = this.getColumnValue(a, sortBy);
      const valueB = this.getColumnValue(b, sortBy);

      if (valueA < valueB) {
        return dir === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return dir === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
    return orgArray;
  }

  getColumnValue(item: object, column: string) {
    const keys = column.split('.');
    return keys.reduce((acc, key) => acc[key as keyof object], item);
  }
}