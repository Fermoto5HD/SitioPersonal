import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { DollarsService } from './../../../services/dollars.service';

@Component({
  selector: 'dollars-leader',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class DollarsLeaderComponent implements OnInit {

	section = {
		title: "Dashboard",
		cover_title: "Dashboard",
		lead: 'Métricas, datos y configuración del sitio.',
		description: 'Crear descripción.'
	}

	constructor(
		private theService:DollarsService,
		title: Title
	) {
		/*title.setTitle('[The Dollars] ' + this.section.title + ' - Fermoto5HD');*/
		this.theService.user().subscribe(theItems => {
			this.count = theItems;
			if (theItems.user.type === "dollars-leader") {
				title.setTitle('[The Dollars] ' + this.section.title + ' - Fermoto5HD');
			} else {
				title.setTitle('[Panel] ' + this.section.title + ' - Fermoto5HD');
			}
		});
	}

	count: any = [];

	ngOnInit() {
		this.theService.count().subscribe(theItems => {
			this.count = theItems;
		});
	}

}
