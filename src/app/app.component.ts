
import { Component , OnInit} from '@angular/core';  
import { FoodList } from './entities/ngconflocation.entity';  
import { NgconfService } from './services/ngconf.service';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent implements OnInit {  
    ngconf: NgConfLocation[];  
  constructor (private ngconflocService: NgconfService) {  
  
  }  
  ngOnInit() {  
this.ngconf = this.ngconflocService.findall();  
  }  
}  
