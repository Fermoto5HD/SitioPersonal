import { Component, OnInit, Input } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { APIService } from './../../../../services/api.service';
import { NetworksService } from './../../../../services/networks.service';

@Component({
  selector: 'network-tweets-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class NetworkTwitterLandingComponent implements OnInit {

	@Input() size: string;
	@Input() limit: number;

	constructor(
		private APIService: APIService,
		private NetworksService: NetworksService,
		meta: Meta, 
		title: Title
	) {
		title.setTitle('Mi lado picante en 280 caracteres - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, twitter, buenos aires, argentina'},
			{ name: 'description', content: 'El perfil de Twitter de Fermoto5HD.' }
		]);
	}

	about: any = null;
	twitter: any = null;

	ngOnInit() {
		this.APIService.variables("about").subscribe(
			data => {
				this.about = data;
			},
			err => {
				console.log('Data: Not available.');
			}
		);
		this.NetworksService.twitter("profile").subscribe(
			data => {
				this.twitter = data;
			},
			err => {
				console.log('TW: Not available.');
			}
		);
	}

}
