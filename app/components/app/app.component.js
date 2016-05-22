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
var angular_mapbox_gl_component_1 = require('../maps/angular-mapbox-gl.component');
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.mapStyleToken = "mapbox://styles/vincentjonssonqi/cio41sohp005rbzm1ei6dte44";
        this.mapPosition = {
            zoom: 15.5,
            bearing: 0,
            pitch: 0,
            center: [-0.15591514, 51.51830379]
        };
        mapboxgl.accessToken = "pk.eyJ1IjoidmluY2VudGpvbnNzb25xaSIsImEiOiJIVVByOWJnIn0.Dq2xmRmGDRSDvLjyrbVjzA";
        setTimeout(function () {
            _this.mapPosition.pitch = 45;
            _this.mapPosition.center = [-0.16591814, 51.51830379];
            console.log(_this.mapPosition);
        }, 5000);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/components/app/app.component.html',
            directives: [angular_mapbox_gl_component_1.AngularMapboxGl]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map