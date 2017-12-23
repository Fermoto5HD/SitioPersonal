import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { FM5HamonService } from './../services/fm5-hamon.service';

import { FM5Contact } from '../classes/fm5-contact';

@Component({
	selector: 'fm5-contact',
	templateUrl: './fm5-contact.component.html',
	styleUrls: ['./fm5-contact.component.css']
})

export class FM5ContactComponent {

	model = new FM5Contact('', '', '');

	theForm: FormGroup;
	contactForm;
	contact;

	submitted = false;

	constructor(
		private fb: FormBuilder,
		private theService:FM5HamonService,
		meta: Meta, 
		title: Title
	) {
		title.setTitle('Contacto - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, portfolio, frontend, buenos aires, argentina'},
			{ name: 'description', content: "Formulario de contacto" }
		]);
		this.theForm = fb.group({
			'name': [null, Validators.compose([Validators.required])],
			'email': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.email])],
			'phone': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15)])],
			'message': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])]
		});
	}

	onSubmit(post) {
		console.log(post);
		this.submitted = true;
		/*this.description = post.description;
		this.name = post.name;*/
		this.theService.send(post).subscribe();
	}

	// TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.model); }

	/*theForm: FormGroup;
	post: any;
	description: string = '';
	name: string = '';

	title: "Contacto";
	//description: 'Si tenés dudas o querés consultarme por algún motivo en particular, podés contactarte por este formulario.';
	submitted = false;
	response: any = false;

	constructor(
		private fb: FormBuilder,
		private theService:FM5HamonService,
		meta: Meta, 
		title: Title
	) {
		title.setTitle('Contacto - Fermoto5HD');
		meta.addTags([
			{ name: 'author',   content: 'Fernando Osorio'},
			{ name: 'keywords', content: 'fernando, osorio, portfolio, frontend, buenos aires, argentina'},
			{ name: 'description', content: "Formulario de contacto" }
		]);
		this.theForm = fb.group({
			'name': [null, Validators.compose([Validators.required])],
			'email': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
			'subject': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(50)])],
			'message': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
			/*'validate': ''*/
		/*});
	}*/

	/*ngOnInit() {
	}
	onSubmit(post) {
		console.log(post);
		this.submitted = true;
		/*this.description = post.description;
		this.name = post.name;*/
		/*this.theService.send(post).subscribe(theAnswer => {
			this.response = theAnswer;
		});
	}*/
}
