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

@Component({
  selector: 'functional-editor-insert-dynamic-data',
  templateUrl: 'insert.component.html',
})
export class FunctionalEditorInsertDynamicDataComponent implements OnInit {
  public title = 'insert Dynamic Data';

  public value = [
    {
      type: 'paragraph',
      children: [{ text: 'This is editable ' }],
    },
  ];

  public dynamicDataList = [
    {
      stepId: '111111',
      stepIdentifier: 'S-1',
      stepName: '创建工作项',
      propertyName: '工作项标题',
      type: 'text',
    },
    {
      stepId: '000000',
      stepIdentifier: '',
      stepName: '',
      propertyName: '当前月份',
      type: 'number',
    },
  ];

  @ViewChild('label', { read: TemplateRef, static: true })
  labelTemplate!: TemplateRef<any>;

  private target: Range;

  editor = withDynamicData(withHistory(withAngular(createEditor())));

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  public onBlur = (event: FocusEvent) => {
    console.log(event);
    this.setTarget();
    console.log(this.target);
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

  public addDynamic(item: any) {
    console.log('⬇️ This is 🌟 addDynamic 🌟 value start line ⬇️');
    console.log(item);
    console.log('⬆️ This is end ⬆️');
    if (this.target) {
      const { anchor } = this.target;
      const currentRange = Editor.range(this.editor, anchor);
      // const currentText = Editor.string(this.editor, currentRange);
      this.insertDynamicData(this.editor, item, anchor);
      this.target = null;
    }
  }
  private insertDynamicData = (
    editor: Editor,
    stepData: any,
    optionAt?: Location
  ) => {
    console.log('⬇️ This is 🌟 optionAt 🌟 value start line ⬇️');
    console.log(optionAt);
    console.log('⬆️ This is end ⬆️');
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

    // Transforms.select(editor, Editor.after(editor, optionAt));
    Transforms.select(editor, editor.selection);
    // Transforms.move(editor);

    AngularEditor.focus(editor);

    // const { selection } = editor;
    // console.log('⬇️ This is 🌟 selection 🌟 value start line ⬇️');
    // console.log(selection);
    // console.log('⬆️ This is end ⬆️');
  };
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
