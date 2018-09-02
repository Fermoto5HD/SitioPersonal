import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class CeltyService implements HttpInterceptor {

  constructor(
    private http: HttpClient
  ) {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    const authReq = req.clone({
      headers: req.headers.set('Content-type', 'application/x-www-form-urlencoded'),
       withCredentials: true
    });
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }

  send(post: any) {
    let the_headers = new HttpHeaders();
    the_headers.append('Content-Type', 'multipart/form-data;boundary='+Math.random());
    the_headers.append('Accept', 'application/json');
    return this.http.post(environment.api_url + '/celty', post, {headers: the_headers})
      .map(res => res);
  }
}