import { Component, OnInit } from '@angular/core';
import { Meta, Title, DomSanitizer } from "@angular/platform-browser";
import { FM5YoutubeService } from './../services/fm5-youtube.service';
import { FM5PortfolioService } from './../services/fm5-portfolio.service';
import { FM5InstagramService } from './../services/fm5-instagram.service';
import { FM5FlickrService } from './../services/fm5-flickr.service';
import * as moment from 'moment';

@Component({
	selector: 'FM5-home',
	templateUrl: './fm5-home.component.html',
	styleUrls: ['./fm5-home.component.css']
})
export class FM5HomeComponent implements OnInit {

	constructor(
		private portfolioService:FM5PortfolioService, 
		private instagramService:FM5InstagramService,
		private flickrService:FM5FlickrService,
		private youtubeService:FM5YoutubeService, 
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

	ngOnInit() {
		/*this.portfolioService.getPortfolio().subscribe(portfolio => {
			this.portfolio = portfolio.filter((item, index) => index < 3 );
		});*/

		this.flickrService.last().subscribe(
			last => {
				this.flickr = last;
			},
			err => {
				console.log('Flickr: Something went wrong!');
			});

		this.instagramService.getList().subscribe(
			last => {this.instagram = last;},
			err => {
				console.log('Instagram: Something went wrong!');
			});

		this.youtubeService.get("latest").subscribe(
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