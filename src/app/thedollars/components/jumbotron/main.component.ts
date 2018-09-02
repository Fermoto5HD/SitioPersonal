import { Component, OnInit } from '@angular/core';
import { DollarsService } from './../../../services/dollars.service';

@Component({
  selector: 'dollars-userinfo',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class DollarsJumbotronComponent implements OnInit {


	constructor(
		private theService:DollarsService
	) { }

	data:any = {};

	ngOnInit() {
  		this.theService.user().subscribe(data => {
			this.data = data;
		});
  	}
}
