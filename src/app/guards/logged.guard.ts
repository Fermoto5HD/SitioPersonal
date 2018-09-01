import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DollarsService } from './../services/dollars.service';

@Injectable()
export class LoggedGuard implements CanActivate {

	check: any = false;
	
	constructor(
		private router: Router,
		private theService: DollarsService
	) {
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return new Promise((resolve) => {
			this.theService.check()
				.subscribe(
					data => {
						this.router.navigate(['/thedollars/leader']);
						resolve(false);
					},
					err => {
						resolve(true);
					}
				);
		});
	}
}
