System.register(['angular2/core', './review.component'], function(exports_1) {
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
    var core_1, review_component_1;
    var TabsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (review_component_1_1) {
                review_component_1 = review_component_1_1;
            }],
        execute: function() {
            TabsComponent = (function () {
                function TabsComponent() {
                    this.tab = 1;
                }
                TabsComponent.prototype.setTab = function (tabId) {
                    this.tab = tabId;
                    console.log(this.tab);
                };
                TabsComponent = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        template: "\n        <section>\n\n            <ul>\n\n                <li>\n                    <button (click)=\"setTab(1)\">Description</button>\n                </li>\n                <li>\n                    <button (click)=\"setTab(2)\">Specs</button>\n                </li>\n                <li>\n                    <button (click)=\"setTab(3)\">Reviews</button>\n                </li>\n\n            </ul>\n\n            <div *ngIf=\"tab == 1\">\n                <h4>Description</h4>\n                <blockquote>{{product.description}}</blockquote>\n            </div>\n\n            <div *ngIf=\"tab == 2\">\n                <h4>Specs</h4>\n                <blockquote>Shine: {{product.shine}}</blockquote>\n            </div>\n\n            <div *ngIf=\"tab == 3\">\n                <h4>Reviews</h4>\n                <blockquote>\n                <div *ngFor=\"#review of product.reviews\">\n                    <strong>Stars: {{review.stars}}</strong>\n                    <p>\n                    {{review.author}}: {{review.body}}\n                    </p>\n                </div>\n                </blockquote>\n\n\n                <review [product]=\"product\"></review>\n            </div>\n\n        </section>\n\n    ",
                        directives: [review_component_1.ReviewComponent],
                        inputs: ['product']
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabsComponent);
                return TabsComponent;
            })();
            exports_1("TabsComponent", TabsComponent);
        }
    }
});
//# sourceMappingURL=tabs.component.js.map