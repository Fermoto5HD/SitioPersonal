import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'FM5-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

	@Input() align: string = 'left';
	@Input() column_container: string = 'col-md-12';
	@Input() video: string;
	@Input() image: string;
	@Input() maintitle: string;
	@Input() lead: string;
	@Input() description: string;
	@Input() description_2: string;

	@Input() url_int: string;
	@Input() url_ext_1: string;
	@Input() url_ext_2: string;
	@Input() url_int_text: string = "Link Interno";
	@Input() url_ext_1_text: string = "Link externo";
	@Input() url_ext_2_text: string = "Otro link externo";

	@Input() breadcrumb_bottom: boolean;
	@Input() breadcrumb_bottom_icon: string;
	@Input() breadcrumb_bottom_text: string;


	@Input() breadcrumb_top: boolean;
	@Input() breadcrumb_top_active: string;
	@Input() breadcrumb_top_1: string;
	@Input() breadcrumb_top_2: string;
	@Input() breadcrumb_top_1_url: string;
	@Input() breadcrumb_top_2_url: string;

	constructor() { }

	ngOnInit() {
	}

}
