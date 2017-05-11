import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'rootAchievements'
})
export class RootAchievementsPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        if(!items)
            return null;
            
        return items.filter(item => !item.parent && item.name);
    }
}