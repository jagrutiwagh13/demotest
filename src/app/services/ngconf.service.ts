import { Injectable } from '@angular/core';  
import { NgConfLocation } from '../entities/ngconflocation.entity';  
  
@Injectable ({  
  providedIn: 'root'  
})  
export class NgconfService {  
  
  findall(): NgConfLocation [] {  
  return [  
    {  
   type: 'FastFood',  
   name : 'Chips',  
   price: " 200",  
    
  },  
  {  
    type: 'liquid',  
    name : 'milk',  
    price: '50',  
     
   },  
   {  
    type: 'vegetables',  
    name : 'tomato',  
    price: '100',  
    
   }  
  ];  
  }  
  
}  

