import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Output,
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

    @Output() removeLabelChange: EventEmitter<CommonLabelComponent> =
        new EventEmitter();

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
            const type = value.element?.type;
            const data = value.element?.data;
            if (type === 'email') {
                this.label = data as string;
            } else if (type === 'dynamic') {
                console.log('⬇️ This is 🌟 data 🌟 value start line ⬇️');
                console.log(data);
                console.log('⬆️ This is end ⬆️');

                this.label = data?.rule_step_identifier + data?.property_text;
            }
        }
    };

    public removeLabel() {
        console.log('⬇️ This is 🌟 remove 🌟 value start line ⬇️');
        console.log(this);
        console.log('⬆️ This is end ⬆️');
        this.removeLabelChange.emit(this);
    }
}
