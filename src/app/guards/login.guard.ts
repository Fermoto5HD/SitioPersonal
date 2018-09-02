import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DollarsService } from './../services/dollars.service';

@Injectable()
export class LoginGuard implements CanActivate {

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
						resolve(true);
					},
					err => {
						this.router.navigate(['/thedollars']);
						resolve(false);
					}
				);
		});
	}
}
