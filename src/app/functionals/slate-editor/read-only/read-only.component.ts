import {
    ChangeDetectorRef,
    OnInit,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { Component } from '@angular/core';
import {
    createEditor,
    Editor,
    Element,
    Range,
    Transforms,
    Location,
} from 'slate';
import { withHistory } from 'slate-history';
import { AngularEditor, withAngular } from 'slate-angular';
import { LabelElement } from 'src/types';
import { INIT_VALUE } from 'src/app/const';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
    selector: 'functional-editor-read-only',
    templateUrl: 'read-only.component.html',
})
export class FunctionalEditorReadOnlyComponent implements OnInit {
    public title = 'Switch Editable';

    public isEditable = false;

    public value = [
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

    public dynamicDataList = [
        {
            stepId: '111111',
            stepIdentifier: 'S-1',
            stepName: '',
            propertyName: '工作项标题',
            type: 'text',
        },
        {
            stepId: '000000',
            stepIdentifier: '',
            stepName: '',
            propertyName: '团队',
            type: 'number',
        },
    ];

    @ViewChild('label', { read: TemplateRef, static: true })
    labelTemplate!: TemplateRef<any>;

    private target: Range;

    public editor = withDynamicData(withHistory(withAngular(createEditor())));

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit() {}

    public onBlur = (event: FocusEvent) => {
        this.setTarget();
    };

    private setTarget() {
        const { selection } = this.editor;

        this.target = {
            anchor: selection.anchor,
            focus: selection.focus,
        };
    }

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

    public keepEditorFocus() {
        console.log('⬇️ This is 🌟 value 🌟 value start line ⬇️');
        console.log(this.value);
        // Transforms.setPoint(this.editor,)
        AngularEditor.focus(this.editor);
    }

    public addDynamic(item: any) {
        event.stopPropagation();
        if (this.target) {
            const { anchor } = this.target;
            this.insertDynamicData(this.editor, item, anchor);
            this.target = null;
        }
    }

    private insertDynamicData = (
        editor: Editor,
        stepData: any,
        optionAt?: Location
    ) => {
        const dynamicData: LabelElement = {
            type: 'dynamic',
            data: stepData,
            children: [{ text: '' }],
        };
        Transforms.insertNodes(
            editor,
            dynamicData,
            optionAt ? { at: optionAt } : undefined
        );

        Transforms.select(editor, editor.selection);
        AngularEditor.focus(editor);
    };

    public removeLabel() {
        const { selection } = this.editor;
        Transforms.removeNodes(this.editor, {
            at: selection,
        });
        const content = this.editor.children;

        if (Array.isArray(content) && content.length === 0) {
            Transforms.insertNodes(this.editor, INIT_VALUE[0]);
        }
    }

    public toggleChange(event: MatSlideToggleChange) {
        this.isEditable = event.checked;
    }
}

// 插入行内元素必须要为 editor 添加这一块的属性
// 告知插入 element 的行为，类似设置插入 element 的 css 属性
const withDynamicData = (editor: Editor) => {
    const { isVoid, isInline } = editor;
    editor.isInline = (element: Element) => {
        return element.type === 'dynamic' ? true : isInline(element);
    };
    editor.isVoid = (element: Element) => {
        return element.type === 'dynamic' ? true : isVoid(element);
    };
    return editor;
};
