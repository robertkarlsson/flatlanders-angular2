import {Component, OnInit} from 'angular2/core';
import {TabComponent} from './tab.component';
import {GalleryComponent} from './gallery.component'
import {ProductService} from './product.service';



@Component({
    selector: 'gem-store',
    template: `
    <header>
        <h1 class="text-center">Flatlander Crafted Gems </h1>
        <h2 class="text-center">- an Angular store</h2>
    </header>
    <div class="list-group">
        <div *ngFor="#product of products">
            <h3>{{product.name }}</h3>
            <em>{{product.price | currency: 'USD'}}</em>

            <gallery [product]="product"></gallery>

            <tab [product]="product"></tab>

            <button >Purchase</button>
        </div>
    </div>

        `,
    directives: [TabComponent, GalleryComponent],
    providers: [ProductService]
})

export class GemStoreComponent implements OnInit{
    public products;

    constructor(private _productService: ProductService ){ }

    ngOnInit(){
        this.products = this._productService.getGems();
    }

}

