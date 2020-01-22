import { Injectable } from '@angular/core';
//importing http client to make the request
//import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import observable related code
//in angular 7, here is how to handle in a clean way the http get request
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
//import { Observable, of } from 'rxjs';
//import  'rxjs/add/operator/catch';
//import  'rxjs/add/operator/do';

@Injectable(
  // {
  //providedIn: 'root'
  // }
)
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'OGZiNjNlOTM3ZjFiNmIzZmMzYmRhYzhiNjk5Mzg2N2RkYjQ2ZDdkNjg3OTYwMzZmYTgwMzRhYzBkMTM5ZTJmNGM3YTU2MWY4NDdmYWZkZmU2YjU1ZmVlOGFjZWQ0ZGIyZGE5ZGY3NzBhODQ1OTUzMzkzN2I2NjQwMTA4YzA5YTc2Zg==';

  constructor(private _http:HttpClient) {
    console.log("blog http-service was called");

  }

  //exception handler
  private handlerError(err:HttpErrorResponse){
    console.log("handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
    
  }

  //method to return all the blog
  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken);
    
    console.log(myResponse);
    return myResponse;

  }

  //method to the particular blog
  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);
    return myResponse;

  }//end get block information function

  //method to create a blog
  public createBlog(blogData): any{
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken,blogData);
    return myResponse;

  }//end create blog

  //method to delete blog
  public deleteBlog(blogId): any{
    let data={};
    let myResponse=this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken,data);
    return myResponse;
  }//end delete blog

  //method to edit blog
  public editBlog(blogId,blogData): any{
    let myResponse=this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken,blogData);
    return myResponse;
  }//edit blog end here


}
