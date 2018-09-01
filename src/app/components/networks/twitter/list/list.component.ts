import { Component, OnInit, Input } from '@angular/core';
import { NetworksService } from './../../../../services/networks.service';

@Component({
  selector: 'network-tweets-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class NetworkTwitterListComponent implements OnInit {

	@Input() size: string;
	@Input() limit: number;
	tweets: any;

  constructor(private theService:NetworksService) { }

  ngOnInit() {
  	this.theService.twitter('list').subscribe(data => {
			if (this.limit) {
				this.tweets = data.filter((item, index) => index < this.limit );
			} else {
				this.tweets = data;
			}
		});
  }

}
