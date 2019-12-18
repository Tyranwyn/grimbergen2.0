import {HostListener} from "@angular/core";

export abstract class WidthAware {
  currentScreenWith = window.innerWidth;
  isSmallScreen = this.currentScreenWith <= 600;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.currentScreenWith = window.innerWidth;
    this.isSmallScreen = this.currentScreenWith <= 600;
  }
}
