import {Component} from '@angular/core';
import {AngularMapboxGl} from '../maps/angular-mapbox-gl.component';

@Component({
    selector: 'my-app',
	templateUrl:'./app/components/app/app.component.html',
	directives:[AngularMapboxGl]
})
export class AppComponent {
	mapStyleToken:String = "mapbox://styles/vincentjonssonqi/cio41sohp005rbzm1ei6dte44";
	mapPosition:Any = {
		zoom:15.5,
		bearing:0,
		pitch:0,
		center:[-0.15591514, 51.51830379]
	};
	constructor(){
		mapboxgl.accessToken = "pk.eyJ1IjoidmluY2VudGpvbnNzb25xaSIsImEiOiJIVVByOWJnIn0.Dq2xmRmGDRSDvLjyrbVjzA";
		setTimeout(() => {
			this.mapPosition.pitch = 45;
			this.mapPosition.center = [-0.16591814, 51.51830379];
			console.log(this.mapPosition);
		},5000);
	}
}
