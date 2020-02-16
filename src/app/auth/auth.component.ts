import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export const backgroundImages = [
  'https://firebasestorage.googleapis.com/v0/b/grimpunt-27c0c.appspot.com/o/backgrounds%2F' +
  'IMG_6163.JPG?alt=media&token=fad8054d-8f20-4300-b774-3e87242aa2ee',
  'https://firebasestorage.googleapis.com/v0/b/grimpunt-27c0c.appspot.com/o/backgrounds%2F' +
  'IMG_6171.JPG?alt=media&token=143f06a1-6731-469b-ad7b-99b62a803908',
  'https://firebasestorage.googleapis.com/v0/b/grimpunt-27c0c.appspot.com/o/backgrounds%2F' +
  'IMG_6172.JPG?alt=media&token=61784829-f2cc-4f14-a868-3d1abb91266b',
  'https://firebasestorage.googleapis.com/v0/b/grimpunt-27c0c.appspot.com/o/backgrounds%2F' +
  'IMG_6181.JPG?alt=media&token=3b4edc76-966e-472a-9114-0f90342d1c77',
  'https://firebasestorage.googleapis.com/v0/b/grimpunt-27c0c.appspot.com/o/backgrounds%2F' +
  'IMG_6189.JPG?alt=media&token=6d0700a3-4180-487d-9c97-0b43c031e9b9',
  'https://firebasestorage.googleapis.com/v0/b/grimpunt-27c0c.appspot.com/o/backgrounds%2F' +
  'IMG_6190.JPG?alt=media&token=81b68d29-e4de-46c9-b2a4-774103a39473',
  'https://firebasestorage.googleapis.com/v0/b/grimpunt-27c0c.appspot.com/o/backgrounds%2F' +
  'IMG_6217.JPG?alt=media&token=ee54bf15-e9dd-4b31-8aa6-8601db3d6bde',
  'https://firebasestorage.googleapis.com/v0/b/grimpunt-27c0c.appspot.com/o/backgrounds%2F' +
  'IMG_6247.JPG?alt=media&token=8bf1fb53-e519-4e07-b87a-3d49fd1241d8',
  'https://firebasestorage.googleapis.com/v0/b/grimpunt-27c0c.appspot.com/o/backgrounds%2F' +
  'IMG_6250.JPG?alt=media&token=e62b95b1-bfad-4bda-850d-e4ff1a76743b',
  'https://firebasestorage.googleapis.com/v0/b/grimpunt-27c0c.appspot.com/o/backgrounds%2F' +
  'IMG_6254.JPG?alt=media&token=01c80489-fa0c-43a6-b09d-20039afa08ef'
];

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: [ './auth.component.scss' ]
})
export class AuthComponent implements OnInit {
  backgroundImage: any;

  constructor(private sanitizer: DomSanitizer) {
    this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url(${backgroundImages[Math.floor(Math.random() * 10)]})`);
  }

  ngOnInit() {
  }

}
