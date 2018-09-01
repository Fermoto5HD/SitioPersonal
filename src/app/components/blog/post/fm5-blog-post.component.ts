import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Meta, Title, DomSanitizer } from "@angular/platform-browser";
import { APIService } from './../../../services/api.service';
import * as moment from 'moment';
import * as locales from 'moment/min/locales';

@Component({
	selector: 'FM5-blog-post',
	templateUrl: './fm5-blog-post.component.html',
	styleUrls: ['./fm5-blog-post.component.css']
})
export class FM5BlogPostComponent implements OnInit {
	slug;
	post: any = [];
	post_date: any;
	post_content: any;
	vote_not_available: boolean = false;
	vote_result;

	constructor(
		private theService: APIService,
		private route: ActivatedRoute,
		private meta: Meta, 
		private title: Title,
		private domsanitizer: DomSanitizer
	) {
		
	}

	ngOnInit(): void {
		this.route.params
			.pipe(
				switchMap((params: Params) => this.theService.blogPost(params['slug']))
			)
			.subscribe(
				blog => {
					this.post = blog,
					this.post_date = moment(blog.date, moment.ISO_8601).format("dddd d [de] MMMM [de] YYYY[, a las] hh:mma")
					this.post_content = this.domsanitizer.bypassSecurityTrustHtml(blog.content)

					this.title.setTitle(blog.title + ' - Fermoto5HD');
					this.meta.addTags([
						{ name: 'author',   content: 'Fernando Osorio'},
						{ name: 'keywords', content: 'fernando, osorio, blog, frontend, buenos aires, argentina'},
						{ name: 'description', content: blog.excerpt }
					]);
				}
			);
	}

	onVote(option: string): void{
		if (this.vote_not_available) {
			this.vote_not_available = true;
			switch (option) {
				case "Y":
					this.theService.blogVote(this.post.slug, 1).subscribe(result => {
						this.vote_result = result;
					});
					break;
				case "K":
					this.theService.blogVote(this.post.slug, 2).subscribe(result => {
						this.vote_result = result;
					});
					break;
				case "N":
					this.theService.blogVote(this.post.slug, 3).subscribe(result => {
						this.vote_result = result;
					});
					break;
			}
		};
	}
}
moment.locale('es-ar');
