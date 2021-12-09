import { OnInit } from '@angular/core';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { createEditor, Element } from 'slate';
import { withHistory } from 'slate-history';
import { withAngular } from 'slate-angular';

@Component({
    selector: 'functional-editor-data-transform',
    templateUrl: 'data-transform.component.html',
})
export class FunctionalEditorDataTransformComponent implements OnInit {
    title = 'data transform';
    public value = initialValue;

    public unilineValue = [
        {
            type: 'paragraph',
            children: [{ text: 'This is editable ' }],
        },
    ];

    @ViewChild('heading_1', { read: TemplateRef, static: true })
    headingOneTemplate!: TemplateRef<any>;

    @ViewChild('heading_2', { read: TemplateRef, static: true })
    headingTwoTemplate!: TemplateRef<any>;

    @ViewChild('heading_3', { read: TemplateRef, static: true })
    headingThreeTemplate!: TemplateRef<any>;

    @ViewChild('blockquote', { read: TemplateRef, static: true })
    blockquoteTemplate!: TemplateRef<any>;

    @ViewChild('ul', { read: TemplateRef, static: true })
    ulTemplate!: TemplateRef<any>;

    @ViewChild('ol', { read: TemplateRef, static: true })
    olTemplate!: TemplateRef<any>;

    @ViewChild('li', { read: TemplateRef, static: true })
    liTemplate!: TemplateRef<any>;

    editor = withHistory(withAngular(createEditor()));

    constructor() {}

    ngOnInit() {}

    valueChange(value: Element[]) {
        console.log('⬇️ This is 🌟 valueChange 🌟 value start line ⬇️');
        console.log(value);
        console.log('⬆️ This is end ⬆️');
    }

    renderElement = (element: any) => {
        return null;
    };
}

const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'This is editable ' }],
    },
];
function parseOriginValue(originValue) {
    if (!Array.isArray(originValue)) {
        throw new TypeError('value must be Array');
    }
    let result = [];
    let newLine = [];

    originValue.forEach((item, index: number) => {
        if (item.ref_value !== '\n') {
            newLine.push(item);
        }
        if (item.ref_value === '\n' || index === originValue.length - 1) {
            // 转换 以及清空
            const newLineResult = parseOriginValueLine(newLine);
            result.push(newLineResult);
            newLine.length = 0;
        }
    });
    return result;
}

function parseOriginValueLine(originLineValue) {
    const lineResult = originLineValue.map((item) => {
        if (item.ref_type === 'static') {
            return {
                text: item.ref_value,
            };
        } else if (item.ref_type === 'dynamic') {
            return {
                type: 'dynamic',
                data: {
                    stepId: '61b1af1c1dc2f8c521aca578',
                    stepIdentifier: 'S-7',
                    stepName: '',
                    propertyName: 'uids',
                    propertyText: '查找到的成员合集',
                    type: 'text',
                },
                children: [{ text: '' }],
            };
        }
    });
    return {
        type: 'paragraph',
        children: lineResult,
    };
}
const originValue = [
    {
        ref_type: 'static',
        ref_value: 'Pull Request已创建，请相关人员前往Review。',
    },
    {
        ref_type: 'static',
        ref_value: '\n',
    },
    {
        ref_type: 'static',
        ref_value: '评审人： ',
    },
    {
        ref_type: 'dynamic',
        ref_value: {
            rule_step_id: '61b1af1c1dc2f8c521aca578',
            property_name: 'uids',
        },
    },
    {
        ref_type: 'static',
        ref_value: ' ',
    },
    {
        ref_type: 'static',
        ref_value: '\n',
    },
    {
        ref_type: 'static',
        ref_value: '地址： ',
    },
    {
        ref_type: 'dynamic',
        ref_value: {
            rule_step_id: '61b1af1c1dc2f8c521aca572',
            property_name: 'pull_request_html_url',
        },
    },
    {
        ref_type: 'static',
        ref_value: ' ',
    },
    {
        ref_type: 'static',
        ref_value: '\n',
    },
    {
        ref_type: 'static',
        ref_value: '标题： ',
    },
    {
        ref_type: 'dynamic',
        ref_value: {
            rule_step_id: '61b1af1c1dc2f8c521aca572',
            property_name: 'pull_request_title',
        },
    },
    {
        ref_type: 'static',
        ref_value: ' ',
    },
    {
        ref_type: 'static',
        ref_value: '\n',
    },
    {
        ref_type: 'static',
        ref_value: '创建时间：',
    },
    {
        ref_type: 'dynamic',
        ref_value: {
            rule_step_id: '000000000000000000000000',
            property_name: 'now',
        },
    },
    {
        ref_type: 'static',
        ref_value: '\n',
    },
];

const newValue = [
    {
        type: 'paragraph',
        children: [{ text: 'Pull Request已创建，请相关人员前往Review。' }],
    },
    {
        type: 'paragraph',
        children: [
            { text: '评审人：' },
            {
                type: 'dynamic',
                data: {
                    stepId: '777777',
                    stepIdentifier: 'S-7',
                    stepName: '',
                    propertyName: '查找到的成员合集',
                    type: 'text',
                },
                children: [{ text: '' }],
            },
        ],
    },
    {
        type: 'paragraph',
        children: [
            { text: '地址：' },
            {
                type: 'dynamic',
                data: {
                    stepId: '111111',
                    stepIdentifier: 'S-1',
                    stepName: '',
                    propertyName: 'Pull Request 显示地址',
                    type: 'text',
                },
                children: [{ text: '' }],
            },
        ],
    },
    {
        type: 'paragraph',
        children: [
            { text: '标题：' },
            {
                type: 'dynamic',
                data: {
                    stepId: '111111',
                    stepIdentifier: 'S-1',
                    stepName: '',
                    propertyName: 'Pull Request 标题',
                    type: 'text',
                },
                children: [{ text: '' }],
            },
        ],
    },
    {
        type: 'paragraph',
        children: [
            { text: '创建时间：' },
            {
                type: 'dynamic',
                data: {
                    stepId: '000000',
                    stepIdentifier: '',
                    stepName: '',
                    propertyName: '当前时间',
                    type: 'timestamp',
                },
                children: [{ text: '' }],
            },
        ],
    },
];
