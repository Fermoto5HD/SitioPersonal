import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FM5BlogService } from './../services/fm5-blog.service';

@Injectable()
export class BlogGuard implements CanActivate {

	check: any = false;
	
	constructor(
		private router: Router,
		private theService: FM5BlogService
	) {
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return new Promise((resolve) => {
			this.theService.getBlogPost(next.params.slug)
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
