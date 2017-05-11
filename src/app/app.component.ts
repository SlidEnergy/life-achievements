import { Component } from '@angular/core';
import {AngularFire, FirebaseAuthState, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	constructor(firebase: AngularFire) {

		this.firebase = firebase;
		this.signup('slidenergy@gmail.com', 'slider123')
	}

	addAchievementPopupVisible: boolean = false;
	achievementPropertyPopupVisible: boolean = false;

	firebase: AngularFire;

	userId: string;
	achievementPoints: FirebaseObjectObservable<any>;
	achievements: FirebaseListObservable<any>;

	snapshot_achievementPoints: any;
	snapshot_achievements: any;

	clickedAchievement: any;

	addAchievement_Clicked(event) {
		this.addAchievementPopupVisible = true;
	}

	achievement_click(achievement) {

        this.achievementPoints.update({
			time: this.snapshot_achievementPoints.time-1
		});
		
		this.achievements.update(achievement.$key, {
			time: achievement.time + 1
		});
    }

	achievementText_click(achievement) {
		this.clickedAchievement = achievement;
		this.achievementPropertyPopupVisible = true;
	}

	load() {
		
 		this.achievementPoints = this.firebase.database.object(this.userId+'/skillpoints');
		this.achievements = this.firebase.database.list(this.userId+'/skills');

		this.achievementPoints.subscribe(snapshot => {
			this.snapshot_achievementPoints = snapshot;
		});

		this.achievements.subscribe(snapshot => {
			this.snapshot_achievements = snapshot;
		});
	}

	default_save() {
		firebase.database().ref(this.userId).set({
			time: 24,
			money: 10000,
			energy: 100,
		});
	}

	createUser(email, password) {

		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error: any) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		  console.log(error.message);
		});
	}

	signup(email, password) {

		// sigh in
		this.firebase.auth.login({email: email, password: password}).catch((error: Error) => { 
			var errorCode = error.name;
			var errorMessage = error.message;
		  
			if(errorCode == "auth/user-not-found")
			{
				this.createUser(email, password);
				return;
			}

			console.log(error.message);
		}).then((user: any) => {
			if(user) {
				this.userId = user.uid;

				this.load();
			}
		});
	}
}
