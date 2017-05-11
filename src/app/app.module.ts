import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { DevExtremeModule } from 'devextreme-angular';
import { RoundProgressModule } from 'angular-svg-round-progressbar'

import { AppComponent } from './app.component';
import { AddAchievementPopupComponent } from './elements/addAchievementPopup';
import { AchievementPropertyPopupComponent } from './elements/achievementPropertyPopup';
import { AchievementViewComponent } from './elements/achievementView';

import { RootAchievementsPipe } from './pipes/rootAchievementsPipe';

import { VarDirective } from './directives/varDirective'

// Firebase config
export const firebaseConfig: any = {
	apiKey: "AIzaSyAg0RSgARDViDzt1WAtD0PcI6hl6EcxU4M",
	authDomain: "lifegame-84fb0.firebaseapp.com",
	databaseURL: "https://lifegame-84fb0.firebaseio.com",
	projectId: "lifegame-84fb0",
	storageBucket: "lifegame-84fb0.appspot.com",
	messagingSenderId: "192543690324"
};

const firebaseAuthConfig = {
	provider: AuthProviders.Password,
	method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
		AddAchievementPopupComponent,
		AchievementPropertyPopupComponent,
		AchievementViewComponent,

		RootAchievementsPipe,

		VarDirective
  ],
  imports: [
    BrowserModule,
		FormsModule,
		HttpModule,
		
		AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
		DevExtremeModule,
		RoundProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
