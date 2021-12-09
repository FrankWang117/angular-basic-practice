import { OnInit } from '@angular/core';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { createEditor, Element } from 'slate';
import { withHistory } from 'slate-history';
import { withAngular } from 'slate-angular';

@Component({
  selector: 'functional-editor-basic',
  templateUrl: 'basic.component.html',
})
export class FunctionalEditorBasicComponent implements OnInit {
  title = 'slate-angular-basic';

  public value = [
    {
      type: 'paragraph',
      children: [{ text: 'This is basic mode. ' }],
    },
  ];

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

  renderText = (text: any) => {
    console.log('⬇️ This is 🌟 text 🌟 value start line ⬇️');
    console.log(text);
    console.log('⬆️ This is end ⬆️');
    // if (
    //   text[MarkTypes.bold] ||
    //   text[MarkTypes.italic] ||
    //   text[MarkTypes.code] ||
    //   text[MarkTypes.underline]
    // ) {
    //   return DemoTextMarkComponent;
    // }
    return null;
  };
}
