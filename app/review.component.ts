/**
 * Created by robertkarlsson on 19/01/16.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'review',
    template: `

    <form (submit)="addReview()" name="reviewForm">

      <blockquote>
        <strong> Stars: {{review.stars}}</strong>
            {{review.body}}
        <cite class="clearfix"> {{review.author}}  </cite>
      </blockquote>


      <h4>Submit a Review</h4>
      <fieldset class="form-group">
        <select  [(ngModel)]="review.stars"  class="form-control"   title="Stars">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>

        </select>
      </fieldset>

      <fieldset class="form-group">
        <textarea  [(ngModel)]="review.body"  class="form-control" placeholder="Write a short review of the product..." title="Review"></textarea>
      </fieldset>

      <fieldset class="form-group">
        <input [(ngModel)]="review.author" type="email" class="form-control" placeholder="jimmyDean@example.org" title="Email" />
      </fieldset>

      <fieldset class="form-group">
        <input type="submit" class="btn btn-primary pull-right" value="Submit Review" />
      </fieldset>
    </form>

    `,
    inputs: ['product']
})

export class ReviewComponent{
    public product;
    public review ={
        stars: 0,
        body: "",
        author: ""
    };

    addReview(){
        this.product.reviews.push(this.review);
        this.review = {
            stars: 0,
            body: "",
            author: ""
        };
    }

}