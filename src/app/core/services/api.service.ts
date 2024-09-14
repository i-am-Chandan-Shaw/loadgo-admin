import { Injectable } from "@angular/core";
import { Driver } from "src/app/shared/models/interface";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.development";

@Injectable({ providedIn: 'root' })

export class ApiService {

  private baseApiUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  public getAllDrivers(): Observable<Driver[]> {
    const api = this.baseApiUrl + 'getDriver.php'
    return this.http.get<Driver[]>(api)
  }

  public getAllUsers(): Observable<Driver[]> {
    const api = this.baseApiUrl + 'getUser.php'
    return this.http.get<Driver[]>(api)
  }

}