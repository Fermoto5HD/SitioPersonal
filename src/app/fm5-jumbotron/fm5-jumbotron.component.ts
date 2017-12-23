import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'FM5-jumbotron',
  templateUrl: './fm5-jumbotron.component.html',
  styleUrls: ['./fm5-jumbotron.component.css']
})
export class FM5JumbotronComponent implements OnInit {

	@Input() align: string = 'left';
	@Input() column_container: string = 'col-md-12';
	@Input() video: string;
	@Input() image: string;
	@Input() title: string;
	@Input() lead: string;
	@Input() description: string;
	@Input() description_2: string;

	@Input() url_int: string;
	@Input() url_ext_1: string;
	@Input() url_ext_2: string;
	@Input() url_int_text: string = "Link Interno";
	@Input() url_ext_1_text: string = "Link externo";
	@Input() url_ext_2_text: string = "Otro link externo";

	@Input() breadcrumb: boolean;
	@Input() breadcrumb_icon: string;
	@Input() breadcrumb_text: string;

	constructor() { }

	ngOnInit() {
	}

}
