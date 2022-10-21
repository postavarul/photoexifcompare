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
  selectedImage: ImageData | undefined;

  constructor(private imageService: ImageService) {}

  processImage(imageInput: any) {
    var exifr = require('exifr');
    var images: File = imageInput.files;
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      // this.selectedImage = new ImageData(event.target.result, file);
      // var file =
      // this.imageService.uploadImage(this.selectedImage.file).subscribe(
      //   (res) => {},
      //   (err) => {}
      // );
    });
    for (let image of imageInput.files) {
      // var blob = reader.readAsDataURL(image);
      exifr.parse(image, true);
      exifr.parse(image).then((output: any) => console.log('output', output));
    }
  }
}

class ImageData {
  constructor(public src: string, public file: File) {}
}
