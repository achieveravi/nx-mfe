import {
  AfterContentInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { registry } from '../registry';

@Component({
  template: '<div #vc></div>',
  selector: 'wrapper-comp',
})
export class Wrapper implements AfterContentInit {
  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngAfterContentInit(): void {
    const elementName = this.route.snapshot.data['elementName'];
    const moduleName: string = this.route.snapshot.data['moduleName'];

    const moduleLoadFn = registry[moduleName as keyof typeof registry];
    moduleLoadFn();

    const element = document.createElement(elementName);
    this.vc.nativeElement.appendChild(element);
  }
}
