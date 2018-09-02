import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { DollarsService } from './../../../services/dollars.service';

@Component({
  selector: 'dollars-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class DollarsInboxComponent implements OnInit {

	constructor(
		private theService:DollarsService,
		title: Title
	) {
		title.setTitle('[The Dollars] Mensajes - Fermoto5HD');
	}

	items: any = [];

	ngOnInit() {
		this.theService.getInbox().subscribe(theItems => {
			this.items = theItems;
		});
	}

	remove(id: string) {
		let result = confirm("¿Estás seguro de querer borrar el mensaje?");
		if (result) {
			alert("Mensaje borrado.");
		};
	}
}
