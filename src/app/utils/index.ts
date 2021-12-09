import { Editor, Element } from 'slate';

export const withDynamicData = (editor: Editor) => {
    const { isVoid, isInline } = editor;
    editor.isInline = (element: Element) => {
        return element.type === 'dynamic' ? true : isInline(element);
    };
    editor.isVoid = (element: Element) => {
        return element.type === 'dynamic' ? true : isVoid(element);
    };
    return editor;
};
