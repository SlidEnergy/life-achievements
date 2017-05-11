import { Component, Input, Output, EventEmitter } from '@angular/core';
import {AngularFire, FirebaseAuthState, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
    selector: 'achievement-property-popup',
    templateUrl: './achievementPropertyPopup.html',
    styleUrls: [ './achievementPropertyPopup.css' ]
})
export class AchievementPropertyPopupComponent {

    @Input() achievements:  FirebaseListObservable<any>;
    @Input() snapshotAchievements: Array<any>;

    @Input() achievement: any;

    // visible (popupVisible)

    popupVisibleValue: boolean = false;

    @Input('visible') 
    get popupVisible(): boolean {
        return this.popupVisibleValue;
    }
    
    set popupVisible(val: boolean) {
        this.popupVisibleValue = val;
        this.popupVisibleChange.emit(this.popupVisibleValue);
    }

    @Output('visibleChange') popupVisibleChange = new EventEmitter();

    saveButton_click(event) {

        let self = this;

        this.achievements.update(this.achievement.$key, { 
            name: this.achievement.name,
            image: this.achievement.image,
            needTime: this.achievement.needTime || 0, 
            needMoney: this.achievement.needMoney || 0, 
            needEnergy: this.achievement.needEnergy || 0,
            time: this.achievement.time || 0,
            money: this.achievement.money || 0,
            energy: this.achievement.energy || 0,
            parent: this.achievement.parentKey || '',
            completed: this.achievement.completed || false
        }).then(data => {
            self.popupVisible = false;
        });
    }
}