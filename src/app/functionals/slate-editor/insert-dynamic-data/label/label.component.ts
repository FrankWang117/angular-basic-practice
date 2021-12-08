import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';
import { Editor } from 'slate';
import { BeforeContextChange, SlateElementContext } from 'slate-angular';
import { LabelElement } from 'src/types';
import { TheBaseElementComponent } from './base-element.component';

@Component({
  selector: 'common-label, [commonLabel]',
  templateUrl: './label.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonLabelComponent
  extends TheBaseElementComponent<LabelElement, Editor>
  implements BeforeContextChange<SlateElementContext>
{
  label: string;

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (this.readonly) {
      return;
    }
  }

  constructor(public elementRef: ElementRef, public cdr: ChangeDetectorRef) {
    super(elementRef, cdr);
  }

  beforeContextChange = (value: SlateElementContext<LabelElement>) => {
    Promise.resolve().then(() => {});
    if (value.element?.data !== this.element?.data) {
      this.label = value.element.data.propertyName;
    }
  };
}
