import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FM5HamonService } from './../services/fm5-hamon.service';

@Injectable()
export class LoginGuard implements CanActivate {
	check: any = false;
	
	constructor(
		private router: Router,
		private theService: FM5HamonService
	) {
	}


	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		if (!this.theService.check) {
			//this.router.navigate(['']);
			this.router.navigate(['/thedollars'], { queryParams: { returnUrl: state.url }});
			return false;
		}
		return true;
	}
}
