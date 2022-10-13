import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'psmfereactang-mfe-container',
  templateUrl: './mfe-container.component.html',
  styleUrls: ['./mfe-container.component.css'],
})
export class MfeContainerComponent implements AfterContentInit {
  @ViewChild('mfeContainer', { read: ElementRef, static: true })
  mfeContainer!: ElementRef;
  constructor() {
    import('remote-react/Module');
  }

  ngAfterContentInit(): void {
    const element = document.createElement('react-element');
    this.mfeContainer.nativeElement.appendChild(element);
  }
}
