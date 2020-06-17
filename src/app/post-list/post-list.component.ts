import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/user.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
posts:any[];
private url='https://jsonplaceholder.typicode.com/posts';

   constructor(private http:HttpClient){
     http.get(this.url)
     .subscribe((response:any) => {
       this.posts=response;
     })
   }


   createPost(input: HTMLInputElement){
        let post={title:input.value};
        input.value='';
        this.http.post(this.url,JSON.stringify(post))
        .subscribe((response:any) =>{
            post['id']=response;
            this.posts.splice(0,0,post);
            // console.log(response.json());
        });
   }


   updatePost(post){
    this.http.post(this.url+'/'+post.id,JSON.stringify({isWrite:true}))
    .subscribe((response:any)=>{
      // console.log(response.json());
    })
   }


   deletePost(post){
     this.http.delete(this.url+'/'+post.id)
     .subscribe((response:any)=>{
       let index = this.posts.indexOf(post);
       this.posts.splice(index,1);
     })
   }  
   ngOnInit(){}
}
