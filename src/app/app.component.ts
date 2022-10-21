import { Component } from '@angular/core';
import { ImageService } from '../app/image.service';

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
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      // this.selectedImage = new ImageData(event.target.result, file);
      // var file =
      // this.imageService.uploadImage(this.selectedImage.file).subscribe(
      //   (res) => {},
      //   (err) => {}
      // );
    });
    var blob = reader.readAsDataURL(file);
  }
}

class ImageData {
  constructor(public src: string, public file: File) {}
}
