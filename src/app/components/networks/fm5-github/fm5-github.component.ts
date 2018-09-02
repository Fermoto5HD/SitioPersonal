import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'FM5-github',
  templateUrl: './fm5-github.component.html',
  styleUrls: ['./fm5-github.component.css']
})
export class FM5GithubComponent implements OnInit {

  constructor(
    meta: Meta, 
    title: Title
   ) {
    title.setTitle('GitHub - Fermoto5HD');
  }

  ngOnInit() {
  }

}
