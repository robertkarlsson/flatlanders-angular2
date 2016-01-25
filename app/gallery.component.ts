import {Component} from 'angular2/core';
@Component({
    selector: 'gallery',
    template: `
      <div *ngIf="product.images.length">
      <div class="img-wrap">
        <img [src]="product.images[current]">
      </div>
        <ul class="img-thumbnails clearfix">
          <li class="small-image pull-left thumbnail" *ngFor="#image of product.images; #i = index">
            <img [src]="image" alt="" (click)="setCurrent(i)">
          </li>
        </ul>
      </div>
    `,
    inputs: ['product']
})


export class GalleryComponent{
    public product;
    public current: number = 0;

    setCurrent(current: number = 0){
        this.current = current;
    }
}