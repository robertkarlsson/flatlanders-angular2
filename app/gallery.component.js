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
    var GalleryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GalleryComponent = (function () {
                function GalleryComponent() {
                    this.current = 0;
                }
                GalleryComponent.prototype.setCurrent = function (current) {
                    if (current === void 0) { current = 0; }
                    this.current = current;
                    console.log(this.current);
                };
                GalleryComponent = __decorate([
                    core_1.Component({
                        selector: 'gallery',
                        template: "\n      <div class='gallery' *ngIf=\"product.images.length\">\n        <img [src]=\"product.images[current]\">\n        <ul class=\"list-inline thumbs\">\n          <li class=\"thumbnail\" *ngFor=\"#image of product.images; #i = index\">\n            <img [src]=\"image\" alt=\"\" (click)=\"setCurrent(i)\">\n          </li>\n        </ul>\n      </div>\n    ",
                        inputs: ['product']
                    }), 
                    __metadata('design:paramtypes', [])
                ], GalleryComponent);
                return GalleryComponent;
            })();
            exports_1("GalleryComponent", GalleryComponent);
        }
    }
});
//# sourceMappingURL=gallery.component.js.map