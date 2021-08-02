import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
//import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component'; 

import { NgconfService } from './services/ngconf.service';  
import {FormsModule} from '@angular/forms';  
  
@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    BrowserModule,  
   // AppRoutingModule,  
    FormsModule  
  ],  
  providers: [NgconfService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  