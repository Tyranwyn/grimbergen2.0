import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: [ './file-upload.component.scss' ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: FileUploadComponent,
    multi: true
  }]
})
export class FileUploadComponent implements ControlValueAccessor {
  @Input() progress;
  @Input() isValid;

  file: File | null = null;
  imagePreview: any;
  onChange = input => {};

  @HostListener('change', [ '$event.target.files' ]) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
    this.preview();
  }

  constructor(private host: ElementRef<HTMLInputElement>,
              private sanitizer: DomSanitizer) {
  }

  writeValue(value: null): void {
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange(fn: (input) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (input) => {}): void {
  }

  preview() {
    const mimeType = this.file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = ev => {
      this.imagePreview = this.sanitizer.bypassSecurityTrustStyle(`url(${reader.result})`);;
    };
  }

  public clearPreview() {
    this.imagePreview = null;
  }
}
