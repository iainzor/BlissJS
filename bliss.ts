import "rxjs/add/operator/map"
import {Input, Injectable} from "angular2/core"
import {Http} from "angular2/http"
import {BlissConfig} from "./bliss-config"

@Injectable()
export class Bliss
{
	@Input() url:string = "/app.json";
	
	private _configPromise:Promise<BlissConfig>;
	
	constructor(private _http:Http) {}
	
	public getConfig() : Promise<BlissConfig> {
		if (!this._configPromise) {
			this._configPromise = new Promise<BlissConfig>(
				(resolve) => {
					this._http.get(this.url)
						.map(res => res.json())
						.subscribe((config:BlissConfig) => {
							resolve(config);
						}
					);
				}
			)
		}
		
		return this._configPromise;
	}
}