import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'fm5-blog-post-disqus',
	templateUrl: './fm5-blog-post-disqus.component.html',
	styleUrls: ['./fm5-blog-post-disqus.component.css']
})
export class FM5BlogPostDisqusComponent implements OnInit {

	@Input() slug: string;
	@Input() title: string;
	path: string;
	url: string;

	constructor() { }


	ngOnInit() {
		this.path = '/blog/' + this.slug;
		this.url = 'https://fermoto5hd.com/blog/' + this.slug;
	}

}
