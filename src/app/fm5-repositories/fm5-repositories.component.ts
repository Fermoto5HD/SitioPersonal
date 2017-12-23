import { Component, OnInit, Input } from '@angular/core';
import { FM5GithubService } from './../services/fm5-github.service';

@Component({
	selector: 'FM5-repositories',
	templateUrl: './fm5-repositories.component.html',
	styleUrls: ['./fm5-repositories.component.css']
})

export class FM5RepositoriesComponent implements OnInit {

	@Input() size: string;
	@Input() limit: number;

	onActivate(e, outlet){
	outlet.scrollTop = 0;
	}
	constructor(private theService:FM5GithubService) {}

	repositories: any = [];

	ngOnInit() {
		this.theService.get().subscribe(repositories => {
			if (this.limit) {
				this.repositories = repositories.filter((item, index) => index < this.limit );
			} else {
				this.repositories = repositories;
			}
		});
	}
}
