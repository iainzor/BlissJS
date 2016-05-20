import "rxjs/add/operator/map"
import {Input, Injectable} from "@angular/core"
import {Http} from "@angular/http"
import {BlissConfig} from "./bliss-config"

@Injectable()
export class Bliss
{
	@Input() url:string = "/app.json";
	
	constructor(private _http:Http) {}
	
	load() : Promise<BlissConfig> {
		return new Promise<BlissConfig>(
			(resolve) => {
				this._http.get(this.url)
					.map(res => res.json())
					.subscribe((config:BlissConfig) => {
						resolve(config);
					}
				);
			}
		);
	}
}