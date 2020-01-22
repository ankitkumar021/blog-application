//service 
import { Injectable } from '@angular/core';

@Injectable(
  // {providedIn: 'root'}
  //it is class that makes a things service
)
export class BlogService {
  //dumy blog variable
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2019-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-21T21:47:51.678Z",
      "created": "2017-10-21T21:47:51.678Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>This is big text </h1> <p>small text</p>",
      "description": "this is the description of example block",
      "title": "This is the  blog two"

    },
    {
      "blogId": "3",
      "lastModified": "2017-11-14T14:15:54.407Z",
      "created": "2017-11-14T14:15:54.407Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is the block body",
      "description": "this is the third block description ",
      "title": "This is the third blog"
    }

  ]
  
  public currentBlog;

  constructor() {
    //isused to check lifecycle
    console.log("service constructer is called");
  }

//method to return all the blog
  public getAllBlogs(): any {
    //changes
    return this.allBlogs;

  }

//method to the particular blog
  public getSingleBlogInformation(currentBlogId): any {
    //using a for loop here from type script
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    //to se the blog method should return
    return this.currentBlog;
  }//end get block information function


}
