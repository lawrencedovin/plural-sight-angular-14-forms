import { Component, OnInit, inject } from '@angular/core';
import { UserSettings } from '../data/user-settings.interface';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {
  private dataService = inject(DataService);
  dateRange: Date;
  originalUserSettings: UserSettings = {
    name: '',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'blah blah blah....'
  };
  isNameFieldErrorOnBlur: boolean = false;
  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  singleModel = 'On';
  subscriptionTypes: Observable<string[]>;
  startTime: Date;

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.dateRange = new Date();
    this.startTime = new Date();
  }

  onBlur(field: NgModel) {
    console.log('onBlur: ', field.valid);
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    if(form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success: ', result),
        error => console.log('error: ', error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors.'
    }
  }
}
