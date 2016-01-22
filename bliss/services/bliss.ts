import "rxjs/add/operator/map"
import {Injectable} from "angular2/core"
import {Http} from "angular2/http"
import {BlissConfig} from "../bliss-config"

@Injectable()
export class BlissService
{
	public promise:Promise<BlissConfig>
	public config:BlissConfig = new BlissConfig()
	
	constructor(private http:Http) {}
	
	load(url:string) : Promise<BlissConfig> {
		this.promise = new Promise(
			(resolve, reject) => {
				var req = this.http.get(url).subscribe(
					(res) => {
						this.config = res.json();
						resolve(this.config);
					}
				);
			}
		);
		
		return this.promise;
	}
}