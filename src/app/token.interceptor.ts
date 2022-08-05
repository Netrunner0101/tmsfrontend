import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './service/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  intercept(httpRequest: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token = localStorage.getItem('token');
    let token2 = sessionStorage.getItem('token');

    // console.log('Interceptor token get :'+ token );
    // const userToken = this.authService.getToken(token);
    
    // Is with the session storage
    const modifiedReq = httpRequest.clone({ 
      headers: httpRequest.headers.set('Authorization', `Bearer ${token2}`),
    });

    console.log('Interceptor : '+ token);

    return next.handle(modifiedReq);
  }
}
