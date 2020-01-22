import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importing forms module 
import {FormsModule} from '@angular/forms';


// router module is used for setting up the Application level routes
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
//import statement for services
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';


//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ng6-toastr-notifications';
//import {ToastModule} from 'ng2-toastr/ng2-toastr';




/*To resolve this problem HttpClient is Angular's mechanism for communicating with a remote server over HTTP.

To make HttpClient available everywhere in the app,

open the root AppModule,

import the HttpClientModule from @angular/common/http,

add it to the @NgModule.imports array.

Add the following to app.module.ts:

import { HttpClientModule } from '@angular/common/http'; */


import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
//decorators
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
   // BrowserAnimationsModule,
     //ToastrModule.forRoot(),
    // BrowserAnimationsModule,
      //ToastModule.forRoot(),

    // RouterModule forRoot methods to declare the possible route in application
    RouterModule.forRoot([
     {path:'home',component:HomeComponent},
     {path:'',redirectTo:'home',pathMatch:'full'},
     {path:'about',component:AboutComponent},
     {path:'blog/:blogId',component:BlogViewComponent},
     {path:'create',component:BlogCreateComponent},
     {path:'edit/:blogId',component:BlogEditComponent},
     {path:'**',component:NotFoundComponent}


    ])
    //AppRoutingModule
  ],
  //service(injected into the providers array) include in the providers arrays
  //service is like class first import then  include in the providers array and called the class(service in the constructer of home component) in your application
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
