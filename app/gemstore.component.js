System.register(['angular2/core', './tab.component', './gallery.component', './product.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tab_component_1, gallery_component_1, product_service_1;
    var GemStoreComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tab_component_1_1) {
                tab_component_1 = tab_component_1_1;
            },
            function (gallery_component_1_1) {
                gallery_component_1 = gallery_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            GemStoreComponent = (function () {
                function GemStoreComponent(_productService) {
                    this._productService = _productService;
                }
                GemStoreComponent.prototype.ngOnInit = function () {
                    this.products = this._productService.getGems();
                };
                GemStoreComponent = __decorate([
                    core_1.Component({
                        selector: 'gem-store',
                        template: "\n    <header>\n        <h1 class=\"text-center\">Flatlander Crafted Gems </h1>\n        <h2 class=\"text-center\">- an Angular store</h2>\n    </header>\n    <div class=\"list-group\">\n        <div *ngFor=\"#product of products\">\n            <h3>{{product.name }}</h3>\n            <em>{{product.price | currency: 'USD'}}</em>\n\n            <gallery [product]=\"product\"></gallery>\n\n            <tab [product]=\"product\"></tab>\n\n            <button >Purchase</button>\n        </div>\n    </div>\n\n        ",
                        directives: [tab_component_1.TabComponent, gallery_component_1.GalleryComponent],
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