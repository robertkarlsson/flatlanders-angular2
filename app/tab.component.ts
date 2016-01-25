/**
 * Created by robertkarlsson on 18/01/16.
 */
import {Component} from 'angular2/core';
import {ReviewComponent} from './review.component';

//TODO a-element triggers pageload if not #, look up in docs to fix this
//TODO a-element # triggers top scroll, not wanted behaviour


@Component({
    selector: 'tab',
    template: `
        <section>


            <ul class="nav nav-pills">
                <li [class.active]="isSet(1)">
                    <a href="#" (click)="setTab(1)">Description</a>
                </li>
                <li [class.active]="isSet(2)">
                    <a href="#" (click)="setTab(2)">Specs</a>
                </li>
                <li [class.active]="isSet(3)">
                    <a href="#" (click)="setTab(3)">Reviews</a>
                </li>

            </ul>

            <div *ngIf="isSet(1)">
                <h4>Description</h4>
                <blockquote>{{product.description}}</blockquote>
            </div>

            <div *ngIf="isSet(2)">
                <h4>Specs</h4>
                <blockquote>Shine: {{product.shine}}</blockquote>
            </div>

            <div *ngIf="isSet(3)">
            <ul>
                <h4>Reviews</h4>
                <li *ngFor="#review of product.reviews">
                    <blockquote>
                        <strong>{{review.stars}} Stars</strong>
                        {{review.body}}
                        <cite class="clearfix">-{{review.author}}</cite>
                    </blockquote>

                </li>
            </ul>

                <review [product]="product"></review>
            </div>

        </section>

    `,
    directives: [ReviewComponent],
    inputs: ['product', 'gem']

})

export class TabComponent {
    public product;
    public tab = 1;

    setTab(setTab) {
        this.tab = setTab || 1;
    }

    isSet(checkTab) {
        return checkTab === this.tab;
    }


}