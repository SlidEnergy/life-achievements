import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
    selector: 'achievement-view',
    templateUrl: './achievementView.html',
    styleUrls: ['./achievementView.css']
})
export class AchievementViewComponent {

    @Input() achievements: FirebaseListObservable<any>;
    @Input() snapshotAchievements: Array<any>;
    
    getAchievement(skillKey: string) {
        if(!this.snapshotAchievements || this.snapshotAchievements.length == 0)
            return null;

        return this.snapshotAchievements.find((item: any) => {
            return item.$key == skillKey;
        });
    }

    getAchievementPercent(achievement: any) {
        if(!achievement)
            return '';

        if(achievement.completed || achievement.time == 0 && achievement.needTime == 0)
            return '100%';
        else
            return (achievement.time/achievement.needTime*100).toFixed(0) + '%';
    }

    getBackgroundImageStyle(achievement: any) {

        if(!achievement || !achievement.image)
            return 'none';
        
        return "url(assets/img/" + achievement.image + ")";
    }

    getCurrentProgress(achievement: any) {

        if(achievement.completed)
            return 100;

        if(achievement.time < 0)
            return 0;

        return achievement.time;
    }

    getMaxProgress(achievement: any) {
        
        if(achievement.completed)
            return 100;

        if(achievement.needTIme < 0)
            return 0;

        return achievement.needTime;
    }

    @Output('achievementClick') achievementClick = new EventEmitter();

    achievement_click(achievement) {

        this.achievementClick.emit(achievement);
    }

    @Output('achievementTextClick') achievementTextClick = new EventEmitter();

    achievementText_click(achievement) {

        this.achievementTextClick.emit(achievement);
    }
}