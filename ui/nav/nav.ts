import {Component, Input, OnChanges} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {Router, RouterLink} from "angular2/router"
import {NavPageInterface, NavPage} from "./nav-page"

@Component({
	selector: "ui-nav",
	template: `
		<section class="pages">
			<template ngFor #page [ngForOf]="nav?.pages">
				<template [ngIf]="!page.is || page.is === 'link'">
					<ui-nav-page 
						[title]="page.title"
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
	directives: [CORE_DIRECTIVES, NavPage, RouterLink],
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