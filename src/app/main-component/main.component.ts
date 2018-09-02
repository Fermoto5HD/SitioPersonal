import { Component, NgZone, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { DollarsService } from './../services/dollars.service';

@Component({
	selector: 'FM5-site',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})

export class AppComponent {

	loading = true;
	navbarCollapsed = true;
	has_session = false;
	isPopState = false;

	@ViewChild('spinnerElement')
	spinnerElement: ElementRef

	constructor(
		private dollarsService:DollarsService,
		private router: Router,
		private ngZone: NgZone,
		private renderer: Renderer,
		Angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
		private locStrat: LocationStrategy) 
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
				this._scrollToTop(250)
			})
		}
		if (event instanceof NavigationEnd) {
			this._hideSpinner()
			//window.scroll(0, 0)
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

	private _scrollToTop(scrollduration): void {
		const 	scrollHeight = window.scrollY,
				scrollStep = Math.PI / ( scrollduration / 15 ),
				cosParameter = scrollHeight / 2;

		let	scrollCount = 0,
			scrollMargin,
			scrollInterval = setInterval( function() {
				if ( window.scrollY != 0 ) {
					scrollCount = scrollCount + 1;  
					scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
					window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
				} 
				else clearInterval(scrollInterval); 
			}, 15 );
	}

	title = 'Fermoto5HD';
	meta = {
		"title": "Fermoto5HD",
		"description": "New site."
	};

	myEvent(event) {
		console.log(event);
	}

	ikebukuro(action) {
		switch (action) {
			case "welcome":
				this.router.navigate(['/ikebukuro']);
				break;
			case "seeya":
				this.dollarsService.seeya();
				break;
		}	
	}

	ngOnInit() {
		//console.log(this.portfolioService.getPortfolio());
		//this.portfolio = this.portfolioService.getPortfolio();
		this.dollarsService.check().subscribe(
			data => {
				this.has_session = true
			},
			error => {
				this.has_session = false
			}
		)

		this.locStrat.onPopState(() => {
			this.isPopState = true;
		});

		this.router.events.subscribe(event => {
			// Scroll to top if accessing a page, not via browser history stack
			if (event instanceof NavigationEnd && !this.isPopState) {
				window.scrollTo(0, 0);
				this.isPopState = false;
			}

			// Ensures that isPopState is reset
			if (event instanceof NavigationEnd) {
				this.isPopState = false;
			}
		});
	}
}
