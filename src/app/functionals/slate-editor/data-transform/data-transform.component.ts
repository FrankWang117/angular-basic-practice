import { OnInit } from '@angular/core';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { createEditor, Element } from 'slate';
import { withHistory } from 'slate-history';
import { withAngular } from 'slate-angular';
import { FLOW_VALUE, FLOW_VALUE_FORMAT } from './flow-value';
import { SLATE_VALUE, SLATE_VALUE_FORMAT } from './slate-value';
import { withDynamicData } from 'src/app/utils';
import { INIT_VALUE, RULE_LIST } from 'src/app/const';
import { EmptyText, LabelElement } from 'src/types';
@Component({
    selector: 'functional-editor-data-transform',
    templateUrl: 'data-transform.component.html',
})
export class FunctionalEditorDataTransformComponent implements OnInit {
    public title = 'data transform';

    public value = INIT_VALUE;

    public oldStr = FLOW_VALUE_FORMAT;

    public newStr = SLATE_VALUE_FORMAT;

    public context = 5;

    public formatMode = 'side-by-side';

    public isDoneForFlowToSlate = false;

    public isDoneForSlateToFlow = false;

    public editor = withDynamicData(withHistory(withAngular(createEditor())));

    @ViewChild('label', { read: TemplateRef, static: true })
    labelTemplate!: TemplateRef<any>;

    constructor() {}

    ngOnInit() {}

    valueChange(value: Element[]) {
        console.log('⬇️ This is 🌟 valueChange 🌟 value start line ⬇️');
        console.log(value);
        console.log('⬆️ This is end ⬆️');
    }

    renderElement = (element: any) => {
        if (element.type === 'dynamic') {
            return this.labelTemplate;
        }
        return null;
    };

    public flowToSlate() {
        const value = parseFlowToSlateValue(FLOW_VALUE);
        this.value = value;
        this.oldStr = SLATE_VALUE_FORMAT;
        this.newStr = JSON.stringify(value, null, 4);
        this.isDoneForSlateToFlow = false;
        this.isDoneForFlowToSlate = true;
    }

    public slateToFlow() {
        const value = buildSlateValueToFlow(SLATE_VALUE);
        this.oldStr = FLOW_VALUE_FORMAT;
        this.newStr = JSON.stringify(value, null, 4);
        this.isDoneForFlowToSlate = false;
        this.isDoneForSlateToFlow = true;
    }
}

function parseFlowToSlateValue(originValue) {
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
            // 转换以及清空
            const newLineResult = parseFlowLineValue(newLine);
            result.push(newLineResult);
            newLine.length = 0;
        }
    });
    return result;
}

function parseFlowLineValue(originLineValue) {
    const lineResult = originLineValue.map((item) => {
        if (item.ref_type === 'static') {
            return {
                text: item.ref_value,
            };
        } else if (item.ref_type === 'dynamic') {
            console.log('item', item);
            const { rule_step_id: id, property_name } = item.ref_value;
            const step = RULE_LIST[id].find(
                (rule) => rule.propertyName === property_name
            );
            return {
                type: 'dynamic',
                data: {
                    rule_step_id: id,
                    rule_step_identifier: step.identifier,
                    property_text: step.text,
                    property_name: step.propertyName,
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

function buildSlateValueToFlow(slateValue: Element[]) {
    if (!Array.isArray(slateValue)) {
        throw new TypeError('value must be Array');
    }
    let result = [];

    slateValue.forEach((item, index: number) => {
        if (index !== 0) {
            result.push({
                ref_type: 'static',
                ref_value: '\n',
            });
        }
        const newLine = buildSlateLineValue(item.children);
        result.push(...newLine);
    });
    return result;
}

function buildSlateLineValue(slateValue) {
    const line = [];
    slateValue.forEach((item) => {
        if (!item.type && (item as unknown as EmptyText).text) {
            line.push({
                ref_type: 'static',
                ref_value: (item as unknown as EmptyText).text,
            });
        } else if (item.type === 'dynamic') {
            line.push(
                ...[
                    {
                        ref_type: 'dynamic',
                        ref_value: {
                            rule_step_id: (item as LabelElement).data
                                .rule_step_id,
                            property_name: (item as LabelElement).data
                                .property_name,
                        },
                    },
                    {
                        ref_type: 'static',
                        ref_value: ' ',
                    },
                ]
            );
        }
        // TODO 没有转换email
    });
    return line;
}
