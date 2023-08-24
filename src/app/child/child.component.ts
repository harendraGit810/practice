import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() total:number = 0 ;

 newProp:string="";
 selectedValue:any;
 records = [
  {"id":1 , "name":"Harendra", "age":31 , "status": "present"},
  {"id":2 , "name":"Narendra", "age":33, "status": "absent"},
  {"id":3 , "name":"Seema", "age":35, "status": "absent"},
  {"id":4 , "name":"Devendra", "age":62 , "status": "present"},
  {"id":5 , "name":"Munni", "age":60, "status": "absent"},
  {"id":6 , "name":"Pratima", "age":32, "status": "present"}
]


}
