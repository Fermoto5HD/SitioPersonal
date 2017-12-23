import { Component, OnInit, Input } from '@angular/core';
import { FM5TwitterService } from './../services/fm5-twitter.service';

@Component({
  selector: 'FM5-tweets',
  templateUrl: './fm5-tweets.component.html',
  styleUrls: ['./fm5-tweets.component.css']
})
export class FM5TweetsComponent implements OnInit {

	@Input() size: string;
	@Input() limit: number;
	tweets: any;

  constructor(private theService:FM5TwitterService) { }

  ngOnInit() {
  	this.theService.tweets().subscribe(data => {
			if (this.limit) {
				this.tweets = data.filter((item, index) => index < this.limit );
			} else {
				this.tweets = data;
			}
		});
  }

}
