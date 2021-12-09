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
import { withDynamicData } from 'src/app/utils';
import { CommonLabelComponent } from '../common/label/label.component';

@Component({
    selector: 'functional-editor-insert-dynamic-data',
    templateUrl: 'insert.component.html',
})
export class FunctionalEditorInsertDynamicDataComponent implements OnInit {
    public title = 'insert Dynamic Data';

    public value = [
        {
            type: 'paragraph',
            children: [{ text: 'This is editable can insert Dynamic Data ' }],
        },
    ];

    public dynamicDataList = [
        {
            rule_step_id: '6114cdfc3701a1a22313f628',
            rule_step_identifier: 'S-1',
            property_text: '工作项标题',
            property_name: 'title',
        },
        {
            rule_step_id: '000000000000000000000000',
            rule_step_identifier: '',
            property_text: '当前月份',
            property_name: 'month',
        },
    ];

    @ViewChild('label', { read: TemplateRef, static: true })
    labelTemplate!: TemplateRef<any>;

    private target: Range;

    // 插入行内元素必须要为 editor 添加这一块的属性 withDynamicData
    // 告知插入 element 的行为，类似设置插入 element 的 css 属性
    editor = withDynamicData(withHistory(withAngular(createEditor())));

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit() {}

    public onBlur = (event: FocusEvent) => {
        this.setTarget();
    };

    public onFocus = (event: FocusEvent) => {
        console.log('⬇️ This is 🌟 event 🌟 value start line ⬇️');
        console.log(event);
        console.log('⬆️ This is end ⬆️');
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

    public removeLabel(label: CommonLabelComponent) {
        const { editor } = label;
        const { selection } = editor;
        console.log('⬇️ This is 🌟  remove Label🌟 value start line ⬇️');
        console.log(selection);
        console.log('⬆️ This is end ⬆️');
        if (selection) {
            Transforms.removeNodes(this.editor, {
                at: selection,
            });
        }
        const content = this.editor.children;

        // if (Array.isArray(content) && content.length === 0) {
        //     Transforms.insertNodes(this.editor, INIT_VALUE[0]);
        // }
    }
}
