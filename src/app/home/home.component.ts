//this is a by defualt statement
import { Component, OnInit, OnDestroy } from '@angular/core';
//import the blog service in home component in this there is two dots which indicate that actually it is included in the app component(so in the app component there is only one dot)
import { BlogService } from '../blog.service';
//import the blogHttpservice in home component
import {BlogHttpService} from "../blog-http.service";
//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  //providers:[BlogService] we do if we want service in each component but not we dont want service in each component
})
// a simple class
export class HomeComponent implements OnInit,OnDestroy {
  public allBlogs=[];
  
  //declare a dumy blog variable
  
//calling or intializing the service in the constructer
//constructor(public blogService:BlogService)
  constructor(public blogHttpService:BlogHttpService) { 
    console.log("home component constructer called");
    
  }

  ngOnInit() {
    console.log("home ngOnInit constructer called");
    //calling the service
    //this.allBlogs = this.blogService.getAllBlogs();
   // this.allBlogs = this.blogHttpService.getAllBlogs();
    //printing the service
    //console.log(this.allBlogs);

    //handling the http get request return observable and to handle observale we used subscribe mehtod
    this.allBlogs=this.blogHttpService.getAllBlogs().subscribe(
      data =>{
        console.log(data);
        this.allBlogs = data["data"];
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      } 
    )
    console.log(this.allBlogs);
  }
  ngOnDestroy(){
    console.log("home ngOnDestroy constructer called");
    
  }

}
