import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'fm5-networks',
	templateUrl: './fm5-networks.component.html',
	styleUrls: ['./fm5-networks.component.css']
})
export class FM5NetworksComponent implements OnInit {

	constructor() { }

	networks = [
		{
			site: "Facebook",
			link: "https://facebook.com/Fermoto5HD"
		},
		{
			site: "Twitter",
			link: "https://twitter.com/Fermoto5HD"
		},
		{
			site: "Google+",
			link: "https://plus.google.com/+Fermoto5HD",
			page: "instagram"
		},
		{
			site: "Instagram",
			link: "https://instagram.com/Fermoto5HD"
		},
		{
			site: "VKontakte",
			link: "https://vk.com/Fermoto5HD"
		},
		{
			site: "Flickr",
			link: "https://flickr.com/Fermoto5HD",
			page: "flickr"
		},
		{
			site: "Soundcloud",
			link: "https://soundcloud.com/Fermoto5HD"
		},
		{
			site: "Trakt",
			link: "https://trakt.tv/user/Fermoto5HD"
		},
		{
			site: "MyAnimeList",
			link: "https://myanimelist.net/profile/Fermoto5HD"
		}
	];

	ngOnInit() {
	}

}
