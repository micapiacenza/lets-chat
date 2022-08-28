import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProfileComponent} from "./profile.component";
import { ProfileSettingsComponent } from './common/components/profile-settings/profile-settings.component';

@NgModule({
  declarations: [

    ProfileSettingsComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
    exports: [
        ProfileSettingsComponent
    ],
  bootstrap: [ProfileComponent]
})
export class ProfileModule { }
