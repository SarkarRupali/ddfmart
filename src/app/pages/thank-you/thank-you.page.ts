import { Component, OnInit } from '@angular/core';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.page.html',
  styleUrls: ['./thank-you.page.scss'],
})
export class ThankYouPage implements OnInit {

  constructor( private webIntent: WebIntent, private authService : AuthService) { }

  ngOnInit() {
  }

  pay(){
    const options = {
      action : this.webIntent.ACTION_VIEW,
      //url : 'upi://pay?pa=8400000701@upi&pn=game&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&am=10&cu=INR&tn=App Payment'
      // url : 'upi://pay?pa=subhankar6661@ibl&pn=Subhankar Saha&cu=INR'
      url : 'upi://pay?pa=maji21@ybl&pn=Chanchal Majhi&cu=INR'
    };
    // Open the intent with options
    this.webIntent.startActivityForResult(options).then(onSuccess=> {
    console.log('Success', onSuccess);
    //alert('Payment Successfully done.');
    },
    onError=> {
    //alert('error');
    });
  }
  logout(){
    this.authService.logout();
  }

}
