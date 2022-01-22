import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements AfterViewInit {
  @ViewChild('element', { static: true }) sampleComponent: ElementRef;
  element: string;

  constructor(private router: Router) {
    this.element = 'embla-' + router.url.split('/')[2];
  }

  ngAfterViewInit() {
    this.sampleComponent.nativeElement.insertAdjacentHTML(
      'beforeend',
      `<${this.element}></${this.element}>`
    );
  }
}
