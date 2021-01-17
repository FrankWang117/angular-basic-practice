import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface FunctionInfo {
  id: number;
  icon: string;
  title: string;
  description: string;
  route: string;
}
@Component({
  selector: 'practice-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  public functions: FunctionInfo[] = [
    {
      id: 0,
      icon: 'drag_square.png', // #8CD28C
      title: 'Drag&Drop',
      description: 'angular 中实现 Drag&Drop 的方式',
      route: 'drag',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  public routeTo(item: FunctionInfo) {
    this.router.navigateByUrl('drag');
  }
  trackByFn(index: number, item: FunctionInfo): number {
    return item.id || index;
  }
}
