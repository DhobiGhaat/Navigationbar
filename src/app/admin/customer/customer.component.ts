import { Component, OnInit } from '@angular/core';
import { GetcustomersService } from 'src/app/services/getcustomers.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  msg:string = "Successfully deleted";
  allCustomer:any=[];
  constructor(private svc:GetcustomersService) { }

  ngOnInit() {
  }
     
   getAllCustomer()
   {
     this.svc.getAllCustomers().subscribe(
       data =>{
       this.allCustomer = data;
       console.log(this.allCustomer);
       }
      
     )
   }

   removeByCustId(id:number)
   {
     console.log("btn clicked"+id);
     this.svc.removeByCustId(id).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
    );
   }

}

// data =>{
//   console.log(data)
//   this.invalidLogin = false
//   this.router.navigate(['welcome', data.firstName])
// },
// error => {
//   console.log(error)
//   this.invalidLogin = true
// }