import { Injectable, inject } from '@angular/core';
import { UserSettings } from './user-settings.interface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private httpClient = inject(HttpClient);

  getSubscriptionTypes() {
    return of(['Monthly', 'Annually', 'Lifeteam']);
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    const headers = new HttpHeaders();
    headers.set("Content-Type", "application/json")
    return this.httpClient.post('https://eofolzaebtf92xg.m.pipedream.net', userSettings, {headers});
  }
}
