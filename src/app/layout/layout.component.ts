import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionInfo } from '../entities';
import { functions } from './functions.config';

@Component({
    selector: 'practice-layout',
    templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
    public functions = functions;

    constructor(private router: Router) {}

    ngOnInit() {}

    public routeTo(item: FunctionInfo) {
        this.router.navigateByUrl(item.route);
    }

    trackByFn(index: number, item: FunctionInfo): number {
        return item.id || index;
    }
}
