/**
 * Created by robertkarlsson on 18/01/16.
 */
import {Component, OnInit} from 'angular2/core';
import {TabsComponent} from './tabs.component';
import {ProductService} from './product.service';



//TODO: ADD THE gallerycomponent
@Component({
    selector: 'gem-store',
    template: `

    <div>
        <div *ngFor="#product of products">
            <h3>{{product.name }}</h3>
            <em>{{product.price | currency: 'SEK'}}</em>



            <tabs [product]="product"></tabs>

            <button >Purchase</button>







        </div>
    </div>

        `,
    directives: [TabsComponent],
    providers: [ProductService]
})

export class GemStoreComponent implements OnInit{
    public products;

    constructor(private _productService: ProductService ){

    }

    ngOnInit(){
        this.products = this._productService.getGems();
        console.log(this.products);
    }

}

