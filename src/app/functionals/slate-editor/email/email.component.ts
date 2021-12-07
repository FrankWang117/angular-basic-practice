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
import { EmailElement } from 'src/types';

@Component({
  selector: 'functional-editor-email',
  templateUrl: 'email.component.html',
})
export class FunctionalEditorEmailComponent implements OnInit {
  public title = '邮件模式';

  private target: Range;

  public value: Element[] = [
    {
      type: 'paragraph',
      children: [
        {
          text: '',
        },
      ],
    },
  ];

  // private startPoint = new WeakMap<Editor, Point>();

  @ViewChild('emailTemplate', { read: TemplateRef, static: true })
  emailTemplate!: TemplateRef<any>;

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
    // const { selection } = this.editor;
    // this.startPoint.set(this.editor, selection);
  }

  public renderElement = (element: any) => {
    if (element.type === 'email') {
      return this.emailTemplate;
    }
    // TODO 应该还需要一个 Flow 项目中用到的 dynamic 类型
  };

  onKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Tab':
      case 'Enter':
        event.preventDefault();
        if (this.target) {
          const { anchor: originAnchor } = this.target;
          const currentRange = Editor.range(
            this.editor,
            originAnchor,
            this.editor.selection?.focus
          );

          const currentText = Editor.string(this.editor, currentRange);
          insertMention(this.editor, currentText.trim(), currentRange);
          this.target = null;
        }
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

  onBlur = (event: FocusEvent) => {};

  onFocus = (event: FocusEvent) => {};
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
  const email: EmailElement = {
    type: 'email',
    character,
    children: [{ text: '' }],
  };
  Transforms.insertNodes(
    editor,
    email,
    optionAt ? { at: optionAt } : undefined
  );
  Transforms.select(editor, Editor.after(editor, optionAt));
  Transforms.move(editor);

  AngularEditor.focus(editor);
};
