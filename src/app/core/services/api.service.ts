import { Injectable } from "@angular/core";
import { Driver } from "src/app/shared/models/interface";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })

export class ApiService {

  private baseApiUrl = 'https://loadgo.in/loadgo/'

  constructor(private http: HttpClient) { }

  public getAllDrivers(): Observable<Driver[]> {
    const api = this.baseApiUrl + 'getDriver.php'
    return this.http.get<Driver[]>(api)
  }

}