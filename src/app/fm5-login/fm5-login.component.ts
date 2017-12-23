import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FM5HamonService } from './../services/fm5-hamon.service';

@Component({
  selector: 'caesar-zepelli',
  templateUrl: './fm5-login.component.html',
  styleUrls: ['./fm5-login.component.css']
})
export class FM5LoginComponent implements OnInit {

	theForm: FormGroup;
	response: any = false;

	constructor(
		private fb: FormBuilder,
		private theService:FM5HamonService,
		meta: Meta, 
		title: Title
	) {
		title.setTitle('Entrar - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, portfolio, frontend, buenos aires, argentina'},
			{ name: 'description', content: 'Login.' }
		]);
		this.theForm = fb.group({
			'username': [null, Validators.required],
			'passcode': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
			'validate': ''
		});
	}

	ngOnInit() {
	}
	onSubmit(post) {
		this.theService.access(post);
		/*this.theService.access(post).subscribe(theAnswer => {
			this.response = theAnswer;
		});*/
	}

}
