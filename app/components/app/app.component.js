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
var mapbox_gl_map_component_1 = require('../maps/mapbox-gl-map.component');
var highlight_1 = require('../../directives/highlight');
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.mapStyleToken = "mapbox://styles/vincentjonssonqi/cioso8gpc001eecnio7hl48hi"; //"mapbox://styles/vincentjonssonqi/cioslshdw001pdpnj49vixc5z";//"mapbox://styles/vincentjonssonqi/cio41s4sw005sb5nipesob1an";//"mapbox://styles/mapbox/streets-v9";
        this.mapPosition = {
            zoom: 15.5,
            bearing: 45,
            pitch: 45,
            center: [-122.4214763, 37.7542969]
        };
        this.events = {
            click: function (eventData) {
                console.log(eventData);
            },
            zoomend: function (eventData) {
                console.log("zoom", eventData);
            }
        };
        mapboxgl.accessToken = "pk.eyJ1IjoidmluY2VudGpvbnNzb25xaSIsImEiOiJIVVByOWJnIn0.Dq2xmRmGDRSDvLjyrbVjzA";
        setTimeout(function () {
            //this.mapStyleToken = "mapbox://styles/vincentjonssonqi/cio41s4sw005sb5nipesob1an";
            _this.mapPosition.zoom = 11.7;
            _this.mapPosition.bearing = 0;
            _this.mapPosition.pitch = 0;
            _this.mapPosition.center = [-122.3814763, 37.7542969];
            console.log(_this.mapPosition);
        }, 5000);
    }
    AppComponent.prototype.didScrollContent = function (e) {
        console.log(e);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/components/app/app.component.html',
            directives: [mapbox_gl_map_component_1.MapboxGlMap, highlight_1.HighlightCodeDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map