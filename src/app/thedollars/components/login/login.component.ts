import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DollarsService } from './../../../services/dollars.service';

@Component({
  selector: 'dollars-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class DollarsLoginComponent implements OnInit {

	theForm: FormGroup;
	response: any = false;

	constructor(
		private fb: FormBuilder,
		private theService: DollarsService,
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
		this.theService.access(post.username, post.passcode);
	}

}
