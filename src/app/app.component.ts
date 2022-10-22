import { Component } from '@angular/core';
import { ImageService } from '../app/image.service';
import exifr from 'exifr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'photoexifcompare';
  constructor(private imageService: ImageService) {}

  getExif(imageInput: any) {
    for (let image of imageInput.files) {
      exifr.parse(image, true);
      exifr.parse(image).then((output: any) => console.log('output', output));
    }
  }
}
