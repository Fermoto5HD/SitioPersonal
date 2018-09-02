import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class DollarsService {

  constructor(private http: Http, private router: Router) { }

  post = [
    '1', '2', '3', '4'
  ]

  /*myData() {
    return true;
  }*/

  access(username: string, passcode: string) {
    let body = {
      'username': username,
      'passcode': passcode
    }
    return this.http.post(environment.api_url + '/thedollars/login', body).subscribe(
      data => {
        this.router.navigate(["/thedollars/leader"])
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
  }

  seeya() {
    return this.http.get(environment.api_url + '/thedollars/seeya').subscribe(
      data => {
        this.router.navigate(["/thedollars"])
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
  }

  check() {
    return this.http.get(environment.api_url + '/thedollars/check_citizen').map(res => res.json());
  }

  user() {
    return this.http.get(environment.api_url + '/thedollars/ikebukuro').map(res => res.json());
  }

  count() {
    return this.http.get(environment.api_url + '/thedollars/count').map(res => res.json());
  }

  getBlog() {
    return this.http.get(environment.api_url + '/thedollars/blog').map(res => res.json());
  }
  getBlogPost(slug: string) {
    return this.http.get(environment.api_url + '/thedollars/blog/'+slug).map(res => res.json());
  }
  getPortfolio() {
    return this.http.get(environment.api_url + '/thedollars/portfolio/').map(res => res.json());
  }
  getInbox() {
    return this.http.get(environment.api_url + '/thedollars/inbox').map(res => res.json());
  }
}