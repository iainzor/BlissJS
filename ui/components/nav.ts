import {Component, Input, OnChanges} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {Router, RouterLink} from "angular2/router"
import {NavPageInterface, NavPageComponent} from "./nav-page"

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
	directives: [CORE_DIRECTIVES, NavPageComponent, RouterLink],
	styleUrls: [
		"./bliss/ui/components/nav.css"
	]
})
export class NavComponent
{
	@Input() nav:Nav;
}

export interface NavInterface
{
	pages:Array<NavPageInterface>
}

export class Nav
{
	pages:Array<NavPageInterface> = []
}