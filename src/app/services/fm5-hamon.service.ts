import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class FM5HamonService implements HttpInterceptor {

  constructor(
    private http: HttpClient
  ) {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    const authReq = req.clone({headers: req.headers.set('Content-type', 'application/x-www-form-urlencoded')});
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }

  post = [
    '1', '2', '3', '4'
  ]
  onLoginSuccess: any;
  onError: any;
  ajax_result: any;

  /*myData() {
    return true;
  }*/
  get check() {
    return this.http.get('/api/check_citizen').map(res => res);
  }

  send(post: any) {
    let the_headers = new HttpHeaders();
    the_headers.append('Content-Type', 'multipart/form-data;boundary='+Math.random());
    the_headers.append('Accept', 'application/json');
    return this.http.post('/api/hamonsender', post, {headers: the_headers})
      .map(res => res);
  }
      /*.map(this.onLoginSuccess)
      .catch(this.onError);*/
  /*access(post: any) {
    return this.http.post('/api/caesarnoticeme', post)
      .map(this.onLoginSuccess)
      .catch(this.onError);
  }*/
  access(post: any) {
    let the_headers = new HttpHeaders();
    the_headers = the_headers.set('Content-Type', 'application/x-www-form-urlencoded');
    the_headers = the_headers.append('Content-Type', 'application/x-www-form-urlencoded');
    the_headers = the_headers.append('Content-Type', 'application/json');
    console.log(post);
    return this.http.post('/api/login', JSON.stringify(post), {headers: the_headers}).map(res => res).subscribe();
  }


  /*intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem(lskeys.TOKEN) != undefined && localStorage.getItem(lskeys.TENANT) != undefined) {
      return next.handle(req.clone({
        setHeaders: {
          'AuthenticationToken': localStorage.getItem(lskeys.TOKEN),
          'Tenant': localStorage.getItem(lskeys.TENANT)
        }
      }));
    }
    else {
       return next.handle(req);
    }
  }*/
}