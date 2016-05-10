import {Component, Input, OnChanges} from "@angular/core"
import {Router, ROUTER_DIRECTIVES} from "@angular/router"
import {NavPageInterface, NavPage} from "./nav-page"

@Component({
	selector: "ui-nav",
	template: `
		<section class="pages">
			<template ngFor let-page [ngForOf]="nav?.pages">
				<template [ngIf]="!page.is || page.is === 'link'">
					<ui-nav-page 
						[page]="page"
						[routerLink]="[page.path]">
					</ui-nav-page>
				</template>
				<template [ngIf]="page.is === 'spacer'">
					<div class="spacer"></div>
				</template>
			</template>
		</section>
	`,
	directives: [NavPage, ROUTER_DIRECTIVES],
	styleUrls: [
		"./bliss/ui/nav/nav.css"
	]
})
export class Nav
{
	@Input() nav:NavInterface;
}

export interface NavInterface
{
	pages:Array<NavPageInterface>
}