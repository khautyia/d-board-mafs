import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';


const API_URL = 'http://localhost/wordpress/';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  

  constructor(private http: HttpClient, private token: TokenStorageService) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'wp-json/wp/v2/posts', { responseType: 'json' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getSinglePost(id: any): Observable<any> {
    const url = `${API_URL}/wp-json/wp/v2/posts/${id}`;
    console.log(url);
    return this.http.get(url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(error)
    })
  }

  makePost(dt:any): Observable<any> {
    var datasit = dt; //JSON.parse(dt);

    let header = new HttpHeaders().set(
      "Authorization",`Bearer ${this.token.getToken()}`
    );
    return this.http.post<any>(API_URL + 'wp-json/wp/v2/market-prices/', datasit, {headers: header});
  }

}
