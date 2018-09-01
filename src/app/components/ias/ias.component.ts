import { Component, OnInit } from '@angular/core';
import { APIService } from './../../services/api.service';

@Component({
  selector: 'FM5-ias',
  templateUrl: './ias.component.html',
  styleUrls: ['./ias.component.css']
})

export class IASComponent implements OnInit {

	constructor(
		private theService: APIService
	) { }

	ia_data: any = [];

	ngOnInit(): void {
		this.theService.ias().subscribe(theItems => {
			this.ia_data = theItems;
		});
	}

}
