import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'functional-editor',
    templateUrl: 'editor.component.html',
})
export class FunctionalEditorComponent implements OnInit {
    public title = 'Slate Angular Use Demo';

    public activeLink = 'basic';

    public links = [
        {
            href: 'basic',
            text: 'Basic',
        },
        {
            href: 'uniline',
            text: 'Uniline',
        },
        {
            href: 'email',
            text: 'Email',
        },
        {
            href: 'dynamic',
            text: 'InsertDynamicData',
        },
        {
            href: 'transform',
            text: 'DataTransform',
        },
        {
            href: 'more',
            text: 'MoreTemplates',
        },
        {
            href: 'read-only',
            text: 'ReadOnlyMode',
        },
        {
            href: 'mention',
            text: 'Mentions',
        },
    ];

    constructor(public router: Router) {
        const urlArr = this.router.url.split('/');
        const currentUrl = urlArr.pop();
        this.activeLink = currentUrl;
    }

    ngOnInit() {}
}
