import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
  items: GalleryItem[];
  constructor(public gallery: Gallery) { }

  ngOnInit(): void {
  	this.items = data.map(item =>
  	      new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
  	    );
  	    this.basicLightboxExample();
  	    this.withCustomGalleryConfig();
  }

  basicLightboxExample() {
      this.gallery.ref().load(this.items);
    }
    withCustomGalleryConfig() {
      const lightboxGalleryRef = this.gallery.ref('anotherLightbox');
      lightboxGalleryRef.setConfig({
        imageSize: ImageSize.Cover,
        thumbPosition: ThumbnailsPosition.Top
      });
      lightboxGalleryRef.load(this.items);
    }

}
const data = [
  {
    srcUrl: 'assets/image/gallery/gallery1.png',
    previewUrl: 'assets/image/gallery/gallery1.png'
   },
  {
    srcUrl: 'assets/image/gallery/gallery2.jpg',
    previewUrl: 'assets/image/gallery/gallery2.jpg'
  },
  {
    srcUrl: 'assets/image/gallery/gallery3.jpg',
    previewUrl: 'assets/image/gallery/gallery3.jpg'
  },
  {
    srcUrl: 'assets/image/gallery/gallery4.jpg',
    previewUrl: 'assets/image/gallery/gallery4.jpg'
  },
  {
    srcUrl: 'assets/image/gallery/gallery5.jpg',
    previewUrl: 'assets/image/gallery/gallery5.jpg'
  },
  {
    srcUrl: 'assets/image/gallery/gallery1.png',
    previewUrl: 'assets/image/gallery/gallery1.png'
   },
  {
    srcUrl: 'assets/image/gallery/gallery2.jpg',
    previewUrl: 'assets/image/gallery/gallery2.jpg'
  },
  {
    srcUrl: 'assets/image/gallery/gallery3.jpg',
    previewUrl: 'assets/image/gallery/gallery3.jpg'
  },
  {
    srcUrl: 'assets/image/gallery/gallery4.jpg',
    previewUrl: 'assets/image/gallery/gallery4.jpg'
  },
  {
    srcUrl: 'assets/image/gallery/gallery5.jpg',
    previewUrl: 'assets/image/gallery/gallery5.jpg'
  }
];