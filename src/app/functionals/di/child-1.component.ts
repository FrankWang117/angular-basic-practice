import { Component, OnInit } from '@angular/core';
import { Element } from 'slate';
import { GlobalService } from 'src/app/shared/shared.service';
import { NewGlobalService } from '../new-global-service';

@Component({
    selector: 'functional-di-child-1',
    template: `{{ globalService.getModule() }}`,
    providers: [
        {
            provide: GlobalService,
            useClass: NewGlobalService,
        },
    ],
})
export class FunctionalDIChild1Component implements OnInit {
    title = 'slate-angular-basic';

    constructor(public globalService: GlobalService) {}

    ngOnInit() {}

    public unilineValueChange(value: Element[]) {
        console.log('uniline value change');
        console.log(value);
    }
}
