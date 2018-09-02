import { Component, OnInit } from '@angular/core';
import { Meta, Title, DomSanitizer } from "@angular/platform-browser";
import { NetworksService } from './../../services/networks.service';
import { APIService } from './../../services/api.service';
import * as moment from 'moment';

@Component({
	selector: 'FM5-home',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.css']
})
export class HomeComponent implements OnInit {

	constructor(
		private APIService: APIService,
		private networksService:NetworksService,
		meta: Meta, 
		title: Title,
		private domsanitizer: DomSanitizer
	) {
		title.setTitle('Fernando Osorio - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, portfolio, frontend, buenos aires, argentina'},
			{ name: 'description', content: 'Desarrollador frontend (y parte de backend) de Villa del Parque, Buenos Aires, Argentina.' }
		]);
	}
	
	sanitizer: DomSanitizer;
	age = 0;
	textbirthday = "";
	portfolio: any = [];
	instagram: any = [];
	flickr: any = []
	flickr_url: any;
	youtube: any = [];
	youtube_iframe: any = null;
	youtube_url: any = null;
	home: any = null;

	ngOnInit() {
		this.APIService.variables("home").subscribe(
			last => {
				this.home = last;
			},
			err => {
				console.log('Home: Not available.');
			});
		this.networksService.flickr("last").subscribe(
			last => {
				this.flickr = last;
			},
			err => {
				console.log('Flickr: Something went wrong!');
			});

		this.networksService.instagram().subscribe(
			last => {this.instagram = last;},
			err => {
				console.log('Instagram: Something went wrong!');
			});

		this.networksService.youtube("latest").subscribe(
			last => {
				this.youtube = last.snippet;
				this.youtube_iframe = this.domsanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+last.snippet.resourceId.videoId+"?rel=0&amp;showinfo=0");
				this.youtube_url = this.domsanitizer.bypassSecurityTrustResourceUrl("https://youtu.be/"+last.snippet.resourceId.videoId);
			},
			err => {
				console.log('YouTube: Something went wrong!');
			}
		);

		const d = new Date();
		const year = d.getFullYear();
		const birth = moment("1994-11-05");
		const birthday = moment(year+"-11-05");
		const birthday_next = moment((year+1)+"-11-05");
		const todaysdate = moment();
		this.age = todaysdate.diff(birth, 'years');
		const nextbirthday = birthday.diff(todaysdate, 'days')+1;
		const secondnextbirthday = birthday_next.diff(todaysdate, 'days')+1;
		const nextage = todaysdate.diff(birth, 'years')+1;

		if (birthday.diff(todaysdate, 'days') === 0) {
			this.textbirthday = "Hoy es mi cumple! Wiii~"; 
		} else if (birthday.diff(todaysdate, 'days')+1 === 1) {
			this.textbirthday = "Mañana cumplo "+nextage+" años"; 
		} else if (birthday.diff(todaysdate, 'days')+1 > 0) {
			this.textbirthday = "En "+ nextbirthday+" días cumplo "+nextage; 
		} else {
			this.textbirthday = "En "+ secondnextbirthday+" días cumplo "+nextage; 
		}
	}
}