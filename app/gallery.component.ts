import {Component} from 'angular2/core';

@Component({
    selector: 'gallery',
    template: `
      <div class='gallery' *ngIf="product.images.length">
        <img [src]="product.images[current]">
        <ul class="list-inline thumbs">
          <li class="thumbnail" *ngFor="#image of product.images; #i = index">
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
        console.log(this.current);
    }
}