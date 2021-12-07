import { OnInit } from '@angular/core';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { createEditor, Element } from 'slate';
import { withHistory } from 'slate-history';
import { withAngular } from 'slate-angular';
// import { DemoTextMarkComponent, MarkTypes } from './text-mark.component';

@Component({
  selector: 'functional-editor-uniline',
  templateUrl: 'uniline.component.html',
})
export class FunctionalEditorUnilineComponent implements OnInit {
  title = 'slate-angular-basic';

  public unilineValue = [
    {
      type: 'paragraph',
      children: [
        {
          text: '北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；大河上下，顿失滔滔。',
        },
      ],
    },
  ];

  editor = withHistory(withAngular(createEditor()));

  constructor() {}

  ngOnInit() {}

  public unilineValueChange(value: Element[]) {
    console.log('uniline value change');
    console.log(value);
  }

  renderElement = (element: any) => {
    console.log('⬇️ This is 🌟 element 🌟 value start line ⬇️');
    console.log(element);
    console.log('⬆️ This is end ⬆️');
    // if (element.type === 'heading-one') {
    //   return this.headingOneTemplate;
    // }
    // if (element.type === 'heading-two') {
    //   return this.headingTwoTemplate;
    // }
    // if (element.type === 'heading-three') {
    //   return this.headingThreeTemplate;
    // }
    // if (element.type === 'block-quote') {
    //   return this.blockquoteTemplate;
    // }
    // if (element.type === 'numbered-list') {
    //   return this.olTemplate;
    // }
    // if (element.type === 'bulleted-list') {
    //   return this.ulTemplate;
    // }
    // if (element.type === 'list-item') {
    //   return this.liTemplate;
    // }
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

  public keyDown(event: KeyboardEvent) {
    console.log('⬇️ This is 🌟 event 🌟 value start line ⬇️');
    console.log(event);
    console.log('⬆️ This is end ⬆️');
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }
}
