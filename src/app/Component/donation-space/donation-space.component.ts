import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DonService } from 'src/app/service/don.service';

@Component({
  selector: 'app-donation-space',
  templateUrl: './donation-space.component.html',
  styleUrls: ['./donation-space.component.css']
})
export class DonationSpaceComponent implements OnInit {

  @Input() id_j: number;
  handler: any;
  constructor(private dons:DonService,private fb:FormBuilder,private router: Router,private toast: NgToastService) { }

  
  donform:FormGroup;
token:any;

  ngOnInit(): void {
    this.loadStripe();
   
    
  
    this.donform=this.fb.group({
   
      sourcedon:['ahmed'],  
      amount:[],
     

    })
  }

 
  
 
 

  handleSubmit() {
    console.log('bbb');
    console.log(this.donform.value.amount);
    this.dons.adddon(this.donform.value,1,2).subscribe();
    this.ngOnInit();
  }
  
  chargeCreditCard() {
    let form = document.getElementsByTagName("form")[0];
    (<any>window).Stripe.card.createToken({
      number: form.cardNumber.value,
      exp_month: form.expMonth.value,
      exp_year: form.expYear.value,
      cvc: form.cvc.value
     
    }, (status: number, response: any) => {
      if (status === 200) {
        let token = response.id;
        console.log(token);
        this.dons.chargeCard(token,form.amount.value);
        this.dons.adddon(this.donform.value,49,2).subscribe();
        
        this.toast.success({detail:"SUCCESS",summary:'Donation complete',duration:5000});
        this.router.navigate(['/jackpot']);
       

      } else {
        console.log(response.error.message);
        this.toast.error({detail:"ERROR",summary:response.error.message,sticky:true});
        this.router.navigate(['/jackpot']);
      }
      
    });
    
  }

  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
  
  }

