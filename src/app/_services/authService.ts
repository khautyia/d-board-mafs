import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarketPrice } from "./../model/market.prices";
import { Observable } from "rxjs/index";
import { ApiResponse } from "./../model/api.response";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class  AuthService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/wordpress/';

  login(username: any, password: any) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'wp-json/jwt-auth/v1/token', {username, password});
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createPost(user: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+'wp-json/wp/v2/market-prices', user);
  }

  updateUser(user: MarketPrice): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
  loginv2(username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + 'wp-json/jwt-auth/v1/token', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + '', {
      username,
      email,
      password
    }, httpOptions);
  }
}