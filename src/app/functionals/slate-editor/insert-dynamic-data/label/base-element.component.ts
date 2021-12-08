import { Component, OnInit } from '@angular/core';
import { AngularEditor, BaseElementComponent } from 'slate-angular';
import { Editor, Element } from 'slate';

@Component({
  selector: 'TheBaseElementComponent',
  template: '',
})
export class TheBaseElementComponent<
    T extends Element = Element,
    K extends AngularEditor = Editor
  >
  extends BaseElementComponent<T, K>
  implements OnInit
{
  ngOnInit() {
    // this.context.attributes['data-slate-key'] = this.context.element
    //   .key as string;
    super.ngOnInit();
    const blockClass = this.editor.isInline(this.element)
      ? 'slate-inline-block'
      : 'slate-block';
    this.nativeElement.classList.add(
      `slate-element-${this.element.type}`,
      blockClass
    );
  }
}
