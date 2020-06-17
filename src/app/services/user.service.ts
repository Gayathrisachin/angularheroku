import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Posts } from '../models/user.model';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/posts';  
    
  constructor(private http: HttpClient) { }  
  
  // getPosts() {  
  //   return this.http.get(this.url);  
  // }  
  
  createPost(post) {  
    return this.http.post(this.url, JSON.stringify(post))  
  }  
  
  updatePost(post){  
    return this.http.patch(this.url + '/' + post.id, post)
  }
  deletePost(id) {  
    return this.http.delete(this.url + '/' + id);  
  }  
}
