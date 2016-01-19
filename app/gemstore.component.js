System.register(['angular2/core', './tabs.component', './product.service'], function(exports_1) {
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
    var core_1, tabs_component_1, product_service_1;
    var GemStoreComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_component_1_1) {
                tabs_component_1 = tabs_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            //TODO: ADD THE gallerycomponent
            GemStoreComponent = (function () {
                function GemStoreComponent(_productService) {
                    this._productService = _productService;
                }
                GemStoreComponent.prototype.ngOnInit = function () {
                    this.products = this._productService.getGems();
                    console.log(this.products);
                };
                GemStoreComponent = __decorate([
                    core_1.Component({
                        selector: 'gem-store',
                        template: "\n\n    <div>\n        <div *ngFor=\"#product of products\">\n            <h3>{{product.name }}</h3>\n            <em>{{product.price | currency: 'SEK'}}</em>\n\n\n\n            <tabs [product]=\"product\"></tabs>\n\n            <button >Purchase</button>\n\n\n\n\n\n\n\n        </div>\n    </div>\n\n        ",
                        directives: [tabs_component_1.TabsComponent],
                        providers: [product_service_1.ProductService]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], GemStoreComponent);
                return GemStoreComponent;
            })();
            exports_1("GemStoreComponent", GemStoreComponent);
        }
    }
});
//# sourceMappingURL=gemstore.component.js.map