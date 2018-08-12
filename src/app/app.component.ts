import {Component, ElementRef} from '@angular/core';
import {AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  constructor(private elementRef: ElementRef) {

  }

  ngAfterViewChecked() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../assets/js/custom.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}
