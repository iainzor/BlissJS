import {RouteComponentConfig} from "./route-component-config"

export class RouteConfig 
{
	path:string;
	
	name:string;
	
	component:RouteComponentConfig;
	
	useAsDefault:boolean = false;
	
	routes:RouteConfig[] = [];
}