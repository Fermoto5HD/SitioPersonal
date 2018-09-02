import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { APIService } from './../services/api.service';

@Injectable()
export class WorkGuard implements CanActivate {

	check: any = false;
	
	constructor(
		private router: Router,
		private theService: APIService
	) {
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return new Promise((resolve) => {
			this.theService.portfolioItem(next.params.slug, next.params.version)
				.subscribe(
					data => {
						console.log("Exists.");
						resolve(true);
					},
					err => {
						this.router.navigate(['/not-found']);
						console.log("Not exists.");
						resolve(false);
					}
				);
		});
	}
}
