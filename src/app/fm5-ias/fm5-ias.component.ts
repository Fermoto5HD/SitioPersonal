import { Component, OnInit } from '@angular/core';
import { FM5IASService } from './../services/fm5-ias.service';

@Component({
  selector: 'FM5-ias',
  templateUrl: './fm5-ias.component.html',
  styleUrls: ['./fm5-ias.component.css']
})

export class FM5IASComponent implements OnInit {

	constructor(
		private theService: FM5IASService
	) { }

	ia_data: any = [];

	ngOnInit(): void {
		this.theService.get().subscribe(theItems => {
			this.ia_data = theItems;
		});
	}

}
