import {Component,ElementRef,Input,ChangeDetectionStrategy,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'mapbox-gl-map',
	template:'',
	changeDetection:ChangeDetectionStrategy.OnPush
})

export class MapboxGlMap{
	id:String;

	@Input() style:String = 'mapbox://styles/mapbox/streets-v8';
	@Input() center:Array = [-0.15591514, 51.51830379];
	@Input() zoom:Number = 10;
	@Input() bearing:Number = 0;
	@Input() pitch:Number = 0;
	@Input() animate:Bool = true;
	@Input() duration:Number = 3000;
	@Input() speed:Number = 0.2;
	@Input() curve:Number = 1;
	@Input() language:String = "en";


	@Output() mbwebglcontextlost = new EventEmitter();
	@Output() mbwebglcontextrestored = new EventEmitter();
	@Output() mbrender = new EventEmitter();
	@Output() mbmove = new EventEmitter();
	@Output() mbtouchcancel = new EventEmitter();
	@Output() mbtouchmove = new EventEmitter();
	@Output() mbtouchend = new EventEmitter();
	@Output() mbtouchstart = new EventEmitter();
	@Output() mbmousemove = new EventEmitter();
	@Output() mbmovestart = new EventEmitter();
	@Output() mbmoveend = new EventEmitter();
	@Output() mbmousedown = new EventEmitter();
	@Output() mbmouseup = new EventEmitter();
	@Output() mbload = new EventEmitter();
	@Output() mbcontextmenu = new EventEmitter();
	@Output() mbdblclick = new EventEmitter();
	@Output() mbclick = new EventEmitter();
	@Output() mbzoom = new EventEmitter();
	@Output() mbzoomend = new EventEmitter();
	@Output() mbzoomstart = new EventEmitter();
	@Output() mbboxzoomstart = new EventEmitter();
	@Output() mbboxzoomend = new EventEmitter();
	@Output() mbboxzoomcancel = new EventEmitter();
	@Output() mbrotatestart = new EventEmitter();
	@Output() mbrotateend = new EventEmitter();
	@Output() mbrotate = new EventEmitter();
	@Output() mbdragstart = new EventEmitter();
	@Output() mbdrag = new EventEmitter();
	@Output() mbdragend = new EventEmitter();
	@Output() mbpitch = new EventEmitter();

	eventPropNames:Array<String> = [
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
	constructor(el:ElementRef){
		var self = this;
		this.id = "map-" + Math.random()*1000000;
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
		this.eventPropNames.forEach(function(name){
			console.log(name,name.replace("mb",""))
			self.map.on(name.replace("mb",""),function(eventData){
				self[name].emit(eventData);
			});
		});




	}

	ngOnChanges(changes: {[propertyName: string]: SimpleChange}){
		console.log(changes);

		if changes['center'] != null || changes['zoom'] != null || changes['bearing'] != null || changes['pitch'] != null{
			this.updatePosition();
		}

		if changes['style'] != null{
			this.map.setStyle(changes['style'].currentValue);
		}


		if changes['language'] != null{
			 this.map.setLayoutProperty('country-label-lg', 'text-field', '{name_' + changes['language'].currentValue + '}');
		}


	}

	updatePosition(){
		var ap = {
			zoom:this.zoom || 10,
			bearing:this.bearing || 0,
			pitch:this.pitch || 0,
			center:this.center || [-1.19591514, 51.51830379],
			animate:this.animate || true,
			duration:this.duration || 3000,
			speed: this.speed || 0.2,
			curve: this.curve || 1,
		};
		this.map.stop();
		this.map.flyTo(ap);
	}
 }
