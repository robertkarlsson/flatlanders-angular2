/**
 * Created by robertkarlsson on 18/01/16.
 */
import {Component} from 'angular2/core';
import {ReviewComponent} from './review.component';

@Component({
    selector: 'tabs',
    template: `
        <section>

            <ul>

                <li>
                    <button (click)="setTab(1)">Description</button>
                </li>
                <li>
                    <button (click)="setTab(2)">Specs</button>
                </li>
                <li>
                    <button (click)="setTab(3)">Reviews</button>
                </li>

            </ul>

            <div *ngIf="tab == 1">
                <h4>Description</h4>
                <blockquote>{{product.description}}</blockquote>
            </div>

            <div *ngIf="tab == 2">
                <h4>Specs</h4>
                <blockquote>Shine: {{product.shine}}</blockquote>
            </div>

            <div *ngIf="tab == 3">
                <h4>Reviews</h4>
                <blockquote>
                <div *ngFor="#review of product.reviews">
                    <strong>Stars: {{review.stars}}</strong>
                    <p>
                    {{review.author}}: {{review.body}}
                    </p>
                </div>
                </blockquote>


                <review [product]="product"></review>
            </div>

        </section>

    `,
    directives: [ReviewComponent],
    inputs: ['product']

})

export class TabsComponent{
    public product;
    public tab = 1;

    setTab(tabId){
        this.tab = tabId;
        console.log(this.tab);
    }


}