import {Router, RouteRegistry, RouteDefinition} from "angular2/router"
import {RouteConfig} from "./route-config"

declare var System:any;

export class DynamicRouter
{
	constructor(public router:Router) {}
	
	populate(routes:RouteConfig[]) : Promise<any> {
		let component = this.router.hostComponent;
		let defs = [];
		
		routes.forEach((route) => {
			let def = this.createRouteDefinition(route, this.router, component);
			defs.push(def);
		});
		return this.router.config(defs);
	}
	
	createRouteDefinition(route:RouteConfig, parentRouter:Router, parentComponent:any) : RouteDefinition {
		return {
			name: route.name,
			path: route.path,
			useAsDefault: route.useAsDefault,
			loader: () => {
				return new Promise<any>(
					(resolve) => {
						//console.log("Loading component", route);
						
						System.import(route.component.path).then(m => {
							let component = m[route.component.name];
							
							if (route.routes && route.routes.length) {
								//console.log("Building child", component);
								
								let childRouter = parentRouter.childRouter(component);
								let dr = new DynamicRouter(childRouter);
								
								dr.populate(route.routes).then(() => resolve(component));
							} else {
								resolve(component);
							}
						});
					}
				);
			}
		};
	}
}