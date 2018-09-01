import { Component, OnInit, Input } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { APIService } from './../../../../services/api.service';
import { NetworksService } from './../../../../services/networks.service';

@Component({
  selector: 'network-facebook-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class NetworkFacebookLandingComponent implements OnInit {

	@Input() size: string;
	@Input() limit: number;

	constructor(
		private APIService: APIService,
		private NetworksService: NetworksService,
		meta: Meta, 
		title: Title
	) {
		title.setTitle('Facebook - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, facebook, buenos aires, argentina'},
			{ name: 'description', content: 'El perfil de Facebook de Fermoto5HD.' }
		]);
	}

	fb: any = null;

	ngOnInit() {
		this.NetworksService.facebook().subscribe(
			data => {
				this.fb = data;
			},
			err => {
				console.log('Data: Not available.');
			}
		);
	}

}
