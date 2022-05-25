import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { catchError } from 'rxjs/operators';

import { Observable } from "rxjs/internal/Observable";
import { throwError } from 'rxjs/internal/observable/throwError';

const TOKEN_HEADER_KEY = 'Authorisation';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let iRequest = request;

    const token  = this.token.getToken();
    if (token) {
      iRequest = request.clone({
        setHeaders: {
          Authorization: `Bearertoken ${token}`,
        }
      });
      console.log('gh: '+ token);
    }
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.token.signOut();
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}