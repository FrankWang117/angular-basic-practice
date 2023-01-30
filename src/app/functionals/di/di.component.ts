import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/shared.service';

@Component({
    selector: 'functional-di',
    templateUrl: './di.component.html',
})
export class FunctionalDIComponent implements OnInit {
    constructor(public globalService: GlobalService) {}

    ngOnInit() {
        console.log(this.globalService.getModule());
    }
}
