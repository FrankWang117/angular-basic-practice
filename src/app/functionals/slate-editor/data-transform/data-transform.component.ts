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
