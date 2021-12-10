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
    Transforms,
    Range,
    Location,
} from 'slate';
import { withHistory } from 'slate-history';
import { AngularEditor, withAngular } from 'slate-angular';
import { LabelElement } from 'src/types';
import { CommonLabelComponent } from '../common/label/label.component';
import { INIT_VALUE } from 'src/app/const';

@Component({
    selector: 'functional-editor-email',
    templateUrl: 'email.component.html',
})
export class FunctionalEditorEmailComponent implements OnInit {
    public title = '邮件模式';

    private target: Range;

    public value: Element[] = INIT_VALUE;

    // private startPoint = new WeakMap<Editor, Point>();

    @ViewChild('label', { read: TemplateRef, static: true })
    labelTemplate!: TemplateRef<any>;

    editor = withMentions(withHistory(withAngular(createEditor())));

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit() {}

    public valueChange(value: Element[]) {
        console.log('⬇️ This is 🌟 value 🌟 value start line ⬇️');
        console.log(value);
        console.log('⬆️ This is end ⬆️');
    }

    private setTarget() {
        const { selection } = this.editor;

        this.target = {
            anchor: selection.anchor,
            focus: selection.focus,
        };
    }

    public renderElement = (element: any) => {
        if (element.type === 'email') {
            return this.labelTemplate;
        }
        // TODO 应该还需要一个 Flow 项目中用到的 dynamic 类型
    };

    onKeydown = (event: KeyboardEvent) => {
        switch (event.key) {
            case 'Tab':
            case 'Enter':
                event.preventDefault();
                this.generateEmailLabel(this.editor);
                this.cdr.detectChanges();
                break;
            case 'Escape':
                event.preventDefault();
                // this.target = null;
                // this.updateSuggestionsLocation();
                this.cdr.detectChanges();
                break;
            default:
                if (!this.target) {
                    this.setTarget();
                }
        }
    };

    onBlur = (event: FocusEvent) => {
        this.generateEmailLabel(this.editor, false);
    };

    public onFocus = (event: FocusEvent) => {};

    public onClick = (event: MouseEvent) => {
        console.log('⬇️ This is 🌟 ---------- 🌟 value start line ⬇️');
        console.log(event);
        console.log('selection', this.editor.selection);
        console.log('⬆️ This is end ⬆️');
    };

    public removeLabel(labelIns: CommonLabelComponent) {
        const { selection } = this.editor;
        console.log('⬇️ This is 🌟 selection 🌟 value start line ⬇️');
        console.log(selection);
        console.log('⬆️ This is end ⬆️');
        Transforms.delete(this.editor, {
            at: selection,
            distance: 1,
            reverse: true,
        });
        // Transforms.removeNodes(this.editor, {
        //     at: selection,
        // });
        const content = this.editor.children;

        if (Array.isArray(content) && content.length === 0) {
            Transforms.insertNodes(this.editor, INIT_VALUE[0]);
        }
    }

    private generateEmailLabel(editor: Editor, isFocus: boolean = true) {
        if (this.target) {
            const { anchor: originAnchor } = this.target;
            const currentRange = Editor.range(
                editor,
                originAnchor,
                editor.selection?.focus
            );

            const currentText = Editor.string(editor, currentRange);
            insertMention(editor, currentText.trim(), currentRange);
            if (isFocus) {
                AngularEditor.focus(editor);
            }
            this.target = null;
        }
    }
}

const withMentions = (editor: Editor) => {
    const { isVoid, isInline } = editor;
    editor.isInline = (element: Element) => {
        return element.type === 'email' ? true : isInline(element);
    };
    editor.isVoid = (element: Element) => {
        return element.type === 'email' ? true : isVoid(element);
    };
    return editor;
};

const insertMention = (
    editor: Editor,
    character: string,
    optionAt?: Location
) => {
    const email: LabelElement = {
        type: 'email',
        data: character,
        children: [{ text: '' }],
    };
    Transforms.insertNodes(
        editor,
        email,
        optionAt ? { at: optionAt } : undefined
    );
    Transforms.select(editor, Editor.after(editor, optionAt));
    Transforms.move(editor);
    // AngularEditor.focus(editor);
};
