import { FunctionInfo } from '../entities';

export const functions: FunctionInfo[] = [
    {
        id: 0,
        icon: 'drag_square.png', // #8CD28C
        title: 'Drag&Drop',
        description: 'angular 中实现 Drag&Drop 的方式',
        route: 'drag',
    },
    {
        id: 1,
        icon: 'create.png',
        title: 'DynamicComponent',
        description: 'angular 中实现动态生成组件',
        route: 'dynamic',
    },
    {
        id: 2,
        icon: 'editor.png',
        title: 'Editor',
        description: '使用 slate angular 实现文本输入',
        route: 'editor',
    },
    {
        id: 3,
        icon: 'structural_directive.png',
        title: 'StructuralDirective',
        description: '实现结构型指令',
        route: 'structural-directive',
    },
];
