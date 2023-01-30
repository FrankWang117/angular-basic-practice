import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalService {
    private moduleName: string = 'DEFAULT VALUE';

    constructor() {}

    public setModule(name: string) {
        this.moduleName = name;
    }
    public getModule() {
        return this.moduleName;
    }
}
