System.register(['angular2/core', './review.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, review_component_1;
    var TabComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (review_component_1_1) {
                review_component_1 = review_component_1_1;
            }],
        execute: function() {
            //TODO a-element triggers pageload if not #, look up in docs to fix this
            //TODO a-element # triggers top scroll, not wanted behaviour
            TabComponent = (function () {
                function TabComponent() {
                    this.tab = 1;
                }
                TabComponent.prototype.setTab = function (setTab) {
                    this.tab = setTab || 1;
                };
                TabComponent.prototype.isSet = function (checkTab) {
                    return checkTab === this.tab;
                };
                TabComponent = __decorate([
                    core_1.Component({
                        selector: 'tab',
                        template: "\n        <section>\n\n\n            <ul class=\"nav nav-pills\">\n                <li [class.active]=\"isSet(1)\">\n                    <a href=\"#\" (click)=\"setTab(1)\">Description</a>\n                </li>\n                <li [class.active]=\"isSet(2)\">\n                    <a href=\"#\" (click)=\"setTab(2)\">Specs</a>\n                </li>\n                <li [class.active]=\"isSet(3)\">\n                    <a href=\"#\" (click)=\"setTab(3)\">Reviews</a>\n                </li>\n\n            </ul>\n\n            <div *ngIf=\"isSet(1)\">\n                <h4>Description</h4>\n                <blockquote>{{product.description}}</blockquote>\n            </div>\n\n            <div *ngIf=\"isSet(2)\">\n                <h4>Specs</h4>\n                <blockquote>Shine: {{product.shine}}</blockquote>\n            </div>\n\n            <div *ngIf=\"isSet(3)\">\n            <ul>\n                <h4>Reviews</h4>\n                <li *ngFor=\"#review of product.reviews\">\n                    <blockquote>\n                        <strong>{{review.stars}} Stars</strong>\n                        {{review.body}}\n                        <cite class=\"clearfix\">-{{review.author}}</cite>\n                    </blockquote>\n\n                </li>\n            </ul>\n\n                <review [product]=\"product\"></review>\n            </div>\n\n        </section>\n\n    ",
                        directives: [review_component_1.ReviewComponent],
                        inputs: ['product', 'gem']
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabComponent);
                return TabComponent;
            })();
            exports_1("TabComponent", TabComponent);
        }
    }
});
//# sourceMappingURL=tab.component.js.map