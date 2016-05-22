import {Component,ElementRef,Input,ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'angular-mapbox-gl',
	template:'',
	changeDetection:ChangeDetectionStrategy.OnPush
})

export class AngularMapboxGl{
	id:String;

	@Input() styleTokenUrl:String = 'mapbox://styles/mapbox/streets-v8';
	@Input() center:Array = [-0.15591514, 51.51830379];
	@Input() zoom:Number = 10;
	@Input() bearing:Number = 0;
	@Input() pitch:Number = 0;
	@Input() animate:Bool = true;
	@Input() duration:Number = 3000;
	@Input() speed:Number = 0.2;
	@Input() curve:Number = 1;

	constructor(el:ElementRef){

		this.id = "map-" + Math.random()*1000000;
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
	ngOnChanges(changes: {[propertyName: string]: SimpleChange}){
		console.log(changes);

		if changes['center'] != null || changes['zoom'] != null || changes['bearing'] != null || changes['pitch'] != null{
			this.updatePosition();
		}

		if changes['styleTokenUrl'] != null{
			this.map.setStyle(changes['styleTokenUrl'].currentValue);
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
