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
  output: any;
  constructor(private imageService: ImageService) {}

  getExif(imageInput: any) {
    for (let image of imageInput.files) {
      exifr
        .parse(image)
        .then((output: any) => (this.output = JSON.stringify(output)));
    }
  }
}
