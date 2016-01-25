System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
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
                };
                GalleryComponent = __decorate([
                    core_1.Component({
                        selector: 'gallery',
                        template: "\n      <div *ngIf=\"product.images.length\">\n      <div class=\"img-wrap\">\n        <img [src]=\"product.images[current]\">\n      </div>\n        <ul class=\"img-thumbnails clearfix\">\n          <li class=\"small-image pull-left thumbnail\" *ngFor=\"#image of product.images; #i = index\">\n            <img [src]=\"image\" alt=\"\" (click)=\"setCurrent(i)\">\n          </li>\n        </ul>\n      </div>\n    ",
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