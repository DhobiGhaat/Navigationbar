import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  curDate:Date= new Date();

  order:Order = new Order("","","",this.curDate,"ORDER_PLACED","IRON",100);
  invalidNewRequest:boolean = false;
  errorMessage:string = "Invalid details"

  constructor() { 
  }

  ngOnInit() {
  }

  NewRequest(){
    // this.ordersvc.createOrder(this.order)
    // .subscribe(
    //   data => {
    //     alert("You have placed new order successfully");
    //     this.invalidNewRequest = false;
    //   },
    //   error =>{
    //     console.log(error)
    //     this.invalidNewRequest = true;
      // }
      
    // )
  console.log(this.order);
  }
}
