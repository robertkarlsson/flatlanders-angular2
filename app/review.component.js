System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ReviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReviewComponent = (function () {
                function ReviewComponent() {
                    this.review = {
                        stars: 0,
                        body: "",
                        author: ""
                    };
                }
                ReviewComponent.prototype.addReview = function () {
                    this.product.reviews.push(this.review);
                    this.review = {
                        stars: 0,
                        body: "",
                        author: ""
                    };
                };
                ReviewComponent = __decorate([
                    core_1.Component({
                        selector: 'review',
                        template: "\n\n    <form (submit)=\"addReview()\" name=\"reviewForm\">\n\n      <blockquote>\n        <strong> Stars: {{review.stars}}</strong>\n            {{review.body}}\n        <cite class=\"clearfix\"> {{review.author}}  </cite>\n      </blockquote>\n\n\n      <h4>Submit a Review</h4>\n      <fieldset class=\"form-group\">\n        <select  [(ngModel)]=\"review.stars\"  class=\"form-control\"   title=\"Stars\">\n          <option *ngFor=\"#value of [1,2,3,4,5]; #i = index\" value=\"{{value}}\">{{value}}</option>\n        </select>\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <textarea  [(ngModel)]=\"review.body\"  class=\"form-control\" placeholder=\"Write a short review of the product...\" title=\"Review\"></textarea>\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <input [(ngModel)]=\"review.author\" type=\"email\" class=\"form-control\" placeholder=\"jimmyDean@example.org\" title=\"Email\" />\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Submit Review\" />\n      </fieldset>\n    </form>\n\n    ",
                        inputs: ['product']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReviewComponent);
                return ReviewComponent;
            })();
            exports_1("ReviewComponent", ReviewComponent);
        }
    }
});
//# sourceMappingURL=review.component.js.map