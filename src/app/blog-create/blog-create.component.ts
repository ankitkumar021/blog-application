import { Component, OnInit  } from '@angular/core';
//ViewContainerRef
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute,Router } from '@angular/router';
//import { ToastrManager } from 'ng6-toastr-notifications';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';



@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService,private _route:ActivatedRoute,private router:Router) {
   //private toastr: ToastsManager, vcr:ViewContainerRef 
   // this.toastr.setRootViewContainerRef(vcr);
   }
  

  public blogTitle:string;
  public blogBodyHtml:string;
  public blogDescription:string;
  public blogCategory:string;
  public possibleCategories:["Comedy","Drama","Action","Technology"];


  ngOnInit() {
  }

  public createBlog(): any {

    let blogData = {

      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory

    }//end blog data

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(

      data =>{
        console.log("Blog Created");
        console.log(data);
        alert('Blog Posted Successfully');
        //this.toastr.success('blog posted successfully!!', 'Success!');

        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        },1000)
      },

      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
        alert('some error occured');
        // this.toastr.error('some error occured', 'Error');
      } 
    )

  }//create blog method end here

}
