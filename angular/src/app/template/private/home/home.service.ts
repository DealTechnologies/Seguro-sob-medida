import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../shared/models/post.interface';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = environment.baseUrl;

  constructor(private readonly httpClient: HttpClient) {
  }

  getUser(): Observable<User> {
    return this.httpClient.get<User>('assets/mocks/user.json');
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('assets/mocks/posts.json');
  }

  getQuestions(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}questionario/1`);
  }

}
