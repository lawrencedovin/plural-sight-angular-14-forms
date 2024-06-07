import { Component } from '@angular/core';
import { UserSettings } from '../data/user-settings.interface';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent {
  userSettings: UserSettings = {
    name: 'Lawrence',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'blah blah blah....'
  };
}
