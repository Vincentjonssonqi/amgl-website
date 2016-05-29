import {Component} from '@angular/core';
import {MapboxGlMap} from '../maps/mapbox-gl-map.component';
import {HighlightCodeDirective} from '../../directives/highlight';
@Component({
    selector: 'my-app',
	templateUrl:'./app/components/app/app.component.html',
	directives:[MapboxGlMap,HighlightCodeDirective]
})
export class AppComponent {
	self = this
	mapStyleToken:String = "mapbox://styles/vincentjonssonqi/cioso8gpc001eecnio7hl48hi";//"mapbox://styles/vincentjonssonqi/cioslshdw001pdpnj49vixc5z";//"mapbox://styles/vincentjonssonqi/cio41s4sw005sb5nipesob1an";//"mapbox://styles/mapbox/streets-v9";
	mapPosition:Any = {
		zoom:15.5,
		bearing:45,
		pitch:45,
		center:[-122.4214763,37.7542969]
	};
	
	constructor(){
		mapboxgl.accessToken = "pk.eyJ1IjoidmluY2VudGpvbnNzb25xaSIsImEiOiJIVVByOWJnIn0.Dq2xmRmGDRSDvLjyrbVjzA";
		setTimeout(() => {
			//this.mapStyleToken = "mapbox://styles/vincentjonssonqi/cio41s4sw005sb5nipesob1an";
			this.mapPosition.zoom = 11.7;
			this.mapPosition.bearing = 0;
			this.mapPosition.pitch = 0;
			this.mapPosition.center = [-122.3814763,37.7542969];
			console.log(this.mapPosition);
		},5000);
	}
	didScrollContent(e){
		console.log(e);
	}

	mapDidGetClickedAction(eventData){
			this.mapPosition.center = eventData.lngLat.toArray()
			console.log(eventData);

	}
}
