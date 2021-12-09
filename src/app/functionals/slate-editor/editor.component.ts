import { Component, OnInit } from '@angular/core';

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

    constructor() {}

    ngOnInit() {}
}
