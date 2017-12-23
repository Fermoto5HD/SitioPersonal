import { Component, NgZone, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

@Component({
	selector: 'FM5-site',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})

export class AppComponent {

	loading = true;
	navbarCollapsed = true;

	@ViewChild('spinnerElement')
	spinnerElement: ElementRef

	constructor(
		private router: Router,
		private ngZone: NgZone,
		private renderer: Renderer,
		Angulartics2GoogleTagManager: Angulartics2GoogleTagManager) 
	{
		router.events.subscribe((event: RouterEvent) => {
			this._navigationInterceptor(event)
		})
	}

	// Shows and hides the loading spinner during RouterEvent changes
	private _navigationInterceptor(event: RouterEvent): void {
		if (event instanceof NavigationStart) {
			// We wanna run this function outside of Angular's zone to
			// bypass change detection
			this.ngZone.runOutsideAngular(() => {
				// For simplicity we are going to turn opacity on / off
				// you could add/remove a class for more advanced styling
				// and enter/leave animation of the spinner
				this.renderer.setElementStyle(
					this.spinnerElement.nativeElement,
					'opacity',
					'1'
				)
			})
		}
		if (event instanceof NavigationEnd) {
			this._hideSpinner()
			window.scroll(0, 0)
		}
		// Set loading state to false in both of the below events to
		// hide the spinner in case a request fails
		if (event instanceof NavigationCancel) {
			this._hideSpinner()
		}
		if (event instanceof NavigationError) {
			this._hideSpinner()
		}
	}

	private _hideSpinner(): void {
		// We wanna run this function outside of Angular's zone to
		// bypass change detection,
		this.ngZone.runOutsideAngular(() => {
			// For simplicity we are going to turn opacity on / off
			// you could add/remove a class for more advanced styling
			// and enter/leave animation of the spinner
			this.renderer.setElementStyle(
				this.spinnerElement.nativeElement,
				'opacity',
				'0'
			)
		})
	}

	title = 'Fermoto5HD';
	meta = {
		"title": "Fermoto5HD",
		"description": "New site."
	};

	myEvent(event) {
		console.log(event);
	}
}
