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
    get popupVisible() {
        return this.popupVisibleValue;
    }
    
    set popupVisible(val) {
        this.popupVisibleValue = val;
        this.popupVisibleChange.emit(this.popupVisibleValue);
    }

    @Output('visibleChange') popupVisibleChange = new EventEmitter();

    saveButton_click(event) {

        let self = this;

        // this.achievements.push({ 
        //     name: this.achievementName, 
        //     image: this.image || '',
        //     needTime: this.needTime || 0, 
        //     needMoney: this.needMoney || 0, 
        //     needEnergy: this.needEnergy || 0,
        //     time: this.time || 0,
        //     money: 0,
        //     energy: 0,
        //     parent: this.parentKey || '',
        //     completed: this.completed || false
        // }).then(data=> {
        //     if(self.parent) {
        //         let childs = self.parent.childs || [];

        //         childs.push(data.key);
                
        //         self.achievements.update(self.parentKey, { childs: childs}).then(data => {
        //             self.popupVisible = false;
        //         });
        //     }
        //     else
        //      self.popupVisible = false;
        // });
    }
}