import { Injectable } from '@angular/core';
import { GlobalService } from '../shared/shared.service';

@Injectable({
    providedIn: 'root',
})
export class NewGlobalService extends GlobalService {
    newModuleName = 'new global service';

    setModule(name: string) {
        this.newModuleName = name;
    }

    getModule() {
        return this.newModuleName;
    }
}
