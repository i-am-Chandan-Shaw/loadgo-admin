import { Pipe, PipeTransform } from "@angular/core";
import { catchError, of, tap } from "rxjs";
import { HelperService } from "src/app/core/services/helper.service";

@Pipe({
  name: 'formatAddress',
})

export class FormatCoordinateAddressPipe implements PipeTransform {
  private cache = new Map<string, string>();
  constructor(private helper: HelperService) { }

  transform(element: { lat: string, lng: string }, ...args: any[]) {
    const cacheKey = `${element.lat},${element.lng}`;

    // Check if we have the address cached
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey));
    }

    // Otherwise, call the service to get the address
    return this.helper.getAddressFromCoordinates(element.lat, element.lng).pipe(
      catchError(() => of('Address not found')), // Gracefully handle errors
      tap(address => {
        this.cache.set(cacheKey, address)
      })  // Cache the result
    );
  }
}