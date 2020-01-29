export class Order {
    orderId:number;
    weight:number;
    pickUpDate:Date;
    deliveryDate:Date;
    orderDate:Date;
    status:string;
     bill:number;
     plan:{serviceID:number,
          price:number,
          service:string,
          }

  
    constructor(weight,pickUpDate,deliveryDate,orderDate,orderStatus,plan,bill) {
     this.weight=weight;
     this.pickUpDate=pickUpDate;
     this.deliveryDate=deliveryDate;
     this.orderDate=orderDate;
     this.status=orderStatus;
     this.bill=bill;
     this.plan=plan;
    }
  }
  