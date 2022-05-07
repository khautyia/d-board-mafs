import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API_URL = 'http://localhost:8000/wp-json/wp/v2/posts';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.post(API_URL + '', { responseType: 'json' }).pipe(catchError(this.errorHandler));
  }

  createPostContent(): Observable<any> {
    return this.http.get(API_URL + '', { responseType: 'json' }).pipe(catchError(this.errorHandler));
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + '', { responseType: 'json' }).pipe(catchError(this.errorHandler));
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + '', { responseType: 'json' }).pipe(catchError(this.errorHandler));
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + '', { responseType: 'json' }).pipe(catchError(this.errorHandler));
  }

  getSinglePost(id: any) {
    const url = `${API_URL}/${id}`;
    console.log(url);
    return this.http.get(url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(error)
    })
  }

}