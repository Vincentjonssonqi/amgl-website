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
var MapboxGlMap = (function () {
    function MapboxGlMap(el) {
        this.style = 'mapbox://styles/mapbox/streets-v8';
        this.center = [-0.15591514, 51.51830379];
        this.zoom = 10;
        this.bearing = 0;
        this.pitch = 0;
        this.animate = true;
        this.duration = 3000;
        this.speed = 0.2;
        this.curve = 1;
        this.language = "en";
        this.mbwebglcontextlost = new core_1.EventEmitter();
        this.mbwebglcontextrestored = new core_1.EventEmitter();
        this.mbrender = new core_1.EventEmitter();
        this.mbmove = new core_1.EventEmitter();
        this.mbtouchcancel = new core_1.EventEmitter();
        this.mbtouchmove = new core_1.EventEmitter();
        this.mbtouchend = new core_1.EventEmitter();
        this.mbtouchstart = new core_1.EventEmitter();
        this.mbmousemove = new core_1.EventEmitter();
        this.mbmovestart = new core_1.EventEmitter();
        this.mbmoveend = new core_1.EventEmitter();
        this.mbmousedown = new core_1.EventEmitter();
        this.mbmouseup = new core_1.EventEmitter();
        this.mbload = new core_1.EventEmitter();
        this.mbcontextmenu = new core_1.EventEmitter();
        this.mbdblclick = new core_1.EventEmitter();
        this.mbclick = new core_1.EventEmitter();
        this.mbzoom = new core_1.EventEmitter();
        this.mbzoomend = new core_1.EventEmitter();
        this.mbzoomstart = new core_1.EventEmitter();
        this.mbboxzoomstart = new core_1.EventEmitter();
        this.mbboxzoomend = new core_1.EventEmitter();
        this.mbboxzoomcancel = new core_1.EventEmitter();
        this.mbrotatestart = new core_1.EventEmitter();
        this.mbrotateend = new core_1.EventEmitter();
        this.mbrotate = new core_1.EventEmitter();
        this.mbdragstart = new core_1.EventEmitter();
        this.mbdrag = new core_1.EventEmitter();
        this.mbdragend = new core_1.EventEmitter();
        this.mbpitch = new core_1.EventEmitter();
        this.eventPropNames = [
            "mbwebglcontextlost",
            "mbwebglcontextrestored",
            "mbrender",
            "mbmove",
            "mbtouchcancel",
            "mbtouchmove",
            "mbtouchend",
            "mbtouchstart",
            "mbmousemove",
            "mbmovestart",
            "mbmoveend",
            "mbmousedown",
            "mbmouseup",
            "mbload",
            "mbcontextmenu",
            "mbdblclick",
            "mbclick",
            "mbzoom",
            "mbzoomend",
            "mbzoomstart",
            "mbboxzoomstart",
            "mbboxzoomend",
            "mbboxzoomcancel",
            "mbrotatestart",
            "mbrotateend",
            "mbrotate",
            "mbdragstart",
            "mbdrag",
            "mbdragend",
            "mbpitch",
        ];
        var self = this;
        this.id = "map-" + Math.random() * 1000000;
        el.nativeElement.id = this.id;
        var mapInitObject = {
            container: this.id,
            style: this.style,
            center: this.center,
            zoom: this.zoom,
            bearing: this.bearing,
            pitch: this.pitch
        };
        this.map = new mapboxgl.Map(mapInitObject);
        this.eventPropNames.forEach(function (name) {
            console.log(name, name.replace("mb", ""));
            self.map.on(name.replace("mb", ""), function (eventData) {
                self[name].emit(eventData);
            });
        });
    }
    MapboxGlMap.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        if (changes['center'] != null || changes['zoom'] != null || changes['bearing'] != null || changes['pitch'] != null) {
            this.updatePosition();
        }
        if (changes['style'] != null) {
            this.map.setStyle(changes['style'].currentValue);
        }
        if (changes['language'] != null) {
            this.map.setLayoutProperty('country-label-lg', 'text-field', '{name_' + changes['language'].currentValue + '}');
        }
    };
    MapboxGlMap.prototype.updatePosition = function () {
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
    ], MapboxGlMap.prototype, "style", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MapboxGlMap.prototype, "center", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MapboxGlMap.prototype, "zoom", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MapboxGlMap.prototype, "bearing", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MapboxGlMap.prototype, "pitch", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "animate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MapboxGlMap.prototype, "duration", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MapboxGlMap.prototype, "speed", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MapboxGlMap.prototype, "curve", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MapboxGlMap.prototype, "language", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbwebglcontextlost", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbwebglcontextrestored", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbrender", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbmove", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbtouchcancel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbtouchmove", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbtouchend", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbtouchstart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbmousemove", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbmovestart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbmoveend", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbmousedown", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbmouseup", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbload", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbcontextmenu", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbdblclick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbclick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbzoom", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbzoomend", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbzoomstart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbboxzoomstart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbboxzoomend", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbboxzoomcancel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbrotatestart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbrotateend", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbrotate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbdragstart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbdrag", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbdragend", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapboxGlMap.prototype, "mbpitch", void 0);
    MapboxGlMap = __decorate([
        core_1.Component({
            selector: 'mapbox-gl-map',
            template: '',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MapboxGlMap);
    return MapboxGlMap;
}());
exports.MapboxGlMap = MapboxGlMap;
//# sourceMappingURL=mapbox-gl-map.component.js.map