import { Component } from '@angular/core';
import { UserSettings } from '../data/user-settings.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent {
  originalUserSettings: UserSettings = {
    name: '',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'blah blah blah....'
  };

  userSettings: UserSettings = { ...this.originalUserSettings };

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }
}
