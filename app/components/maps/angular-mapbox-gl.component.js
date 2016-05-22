"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AngularMapboxGl = (function () {
    function AngularMapboxGl(el) {
        this.styleTokenUrl = 'mapbox://styles/mapbox/streets-v8';
        this.center = [-0.15591514, 51.51830379];
        this.zoom = 10;
        this.bearing = 0;
        this.pitch = 0;
        this.animate = true;
        this.duration = 3000;
        this.speed = 0.2;
        this.curve = 1;
        this.id = "map-" + Math.random() * 1000000;
        el.nativeElement.id = this.id;
        var mapInitObject = {
            container: this.id,
            style: this.styleTokenUrl,
            center: this.center,
            zoom: this.zoom,
            bearing: this.bearing,
            pitch: this.pitch
        };
        this.map = new mapboxgl.Map(mapInitObject);
    }
    AngularMapboxGl.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        if (changes['center'] != null || changes['zoom'] != null || changes['bearing'] != null || changes['pitch'] != null) {
            this.updatePosition();
        }
        if (changes['styleTokenUrl'] != null) {
            this.map.setStyle(changes['styleTokenUrl'].currentValue);
        }
    };
    AngularMapboxGl.prototype.updatePosition = function () {
        var ap = {
            zoom: this.zoom || 10,
            bearing: this.bearing || 0,
            pitch: this.pitch || 0,
            center: this.center || [-1.19591514, 51.51830379],
            animate: this.animate || true,
            duration: this.duration || 3000,
            speed: this.speed || 0.2,
            curve: this.curve || 1,
        };
        this.map.stop();
        this.map.flyTo(ap);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularMapboxGl.prototype, "styleTokenUrl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AngularMapboxGl.prototype, "center", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AngularMapboxGl.prototype, "zoom", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AngularMapboxGl.prototype, "bearing", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AngularMapboxGl.prototype, "pitch", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AngularMapboxGl.prototype, "animate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AngularMapboxGl.prototype, "duration", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AngularMapboxGl.prototype, "speed", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AngularMapboxGl.prototype, "curve", void 0);
    AngularMapboxGl = __decorate([
        core_1.Component({
            selector: 'angular-mapbox-gl',
            template: '',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AngularMapboxGl);
    return AngularMapboxGl;
}());
exports.AngularMapboxGl = AngularMapboxGl;
//# sourceMappingURL=angular-mapbox-gl.component.js.map