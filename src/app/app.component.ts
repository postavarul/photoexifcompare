import { Component } from '@angular/core';
import { ImageService } from '../app/image.service';
import exifr from 'exifr';
import * as ExifReader from 'exifreader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'photoexifcompare';
  exifrOutput: any;
  static exifReaderOutput: any;
  public classReference = AppComponent;

  constructor(private imageService: ImageService) {}

  getExif(imageInput: any) {
    let fileReader = new FileReader();
    for (let image of imageInput.files) {
      exifr
        .parse(image)
        .then((output: any) => (this.exifrOutput = JSON.stringify(output)));

      var arrayBuffer: any;

      fileReader.onload = function (event) {
        arrayBuffer = fileReader.result;
        var result: any = ExifReader.load(arrayBuffer);
        AppComponent.exifReaderOutput = JSON.stringify(result);
      };

      fileReader.readAsArrayBuffer(image);
    }
  }
}
