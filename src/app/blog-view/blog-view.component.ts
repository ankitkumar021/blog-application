import { Component, OnInit, OnDestroy } from '@angular/core';
//import route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from "../blog-http.service";
import { Location } from '@angular/common';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location ]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  //empty object
  public currentBlog;
  
  
  //declare a dummy block variable here
  /* public allBlogs = [
     {
       "blogId": "1",
       "lastModified": "2019-10-20T12:20:47.854Z",
       "created": "2017-10-20T12:20:47.854Z",
       "tags": ["humour","standup comedy","heheh"],
       "author": "Admin",
       "category": "comedy",
       "isPublished": true,
       "views": 0,
       "bodyHtml": "this is blog body",
       "description": "this is blog 1 description",
       "title": "This is the first blog"
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
       "title": "This is the second blog"
 
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
       "description": "this is the third block description",
       "title": "This is the third blog"
     }
 
 
 
 
 
 
   ]*/


  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogService,public blogHttpService: BlogHttpService, private location:Location) {
    console.log("blogview constructer is called");
  }

  ngOnInit() {
    console.log("blogview ngOnInit is called");
    //getting the blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the function to get the blog with this blogId out of overall array
    /*this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId);
    console.log(this.currentBlog);*/
    //the above is the normal way to catch service
    //calling the functionto get the blog with this blog id out of the overall array
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },

      error => {
        console.log("some error occured");
        console.log(error.errorMessage);

      }

    )
    // console.log(this.currentBlog);


  }

  public deleteThisBlog(): any {

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        alert('Blog deleted Successfully');
        //this.toastr.success('blog posted successfully!!', 'Success!');

        setTimeout(() => {
          this.router.navigate(['/home']);
        },1000)
      },

      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
        alert('some error occured');
        // this.toastr.error('some error occured', 'Error');
      } 
    )


  }
  public goBackToPreviousPage(): any{
    this.location.back();

  }

  ngOnDestroy() {
   // console.log(" blogview ngOnDestroy constructer called");
    console.log(" blogview Destroy ");
    
  }

  /*public getSingleBlogInformation(currentBlogId): any {
 using a for loop here from type script
 for (let blog of this.allBlogs) {
   if (blog.blogId == currentBlogId) {
     this.currentBlog = blog;
    }
 }
 console.log(this.currentBlog);
}*///end get block information function

}
