import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { FM5BlogService } from './../services/fm5-blog.service';

@Component({
	selector: 'app-fm5-blog',
	templateUrl: './fm5-blog.component.html',
	styleUrls: ['./fm5-blog.component.css']
})
export class FM5BlogComponent implements OnInit {

	section = {
		title: "Blog",
		cover_title: "Blog",
		description: 'Un rincón de opinión propia en Internet.'
	}

	constructor(
		private theService:FM5BlogService,  
		meta: Meta, 
		title: Title
	) {
		title.setTitle(this.section.title + ' - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, portfolio, frontend, buenos aires, argentina'},
			{ name: 'description', content: this.section.description }
		]);
	}

	posts: any = [];

	ngOnInit() {
		this.theService.getBlog().subscribe(posts => {
			this.posts = posts;
		});
	}
}
