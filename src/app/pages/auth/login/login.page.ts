import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { AlertService } from '../../../services/alert.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login_frm : FormGroup

  constructor( private formBuilder : FormBuilder, private router : Router, private authService : AuthService,
               private alertService : AlertService, private navCtrl:  NavController,public http: HttpClient ) { 
    
              this.login_frm = this.formBuilder.group({
                uName : new FormControl('', Validators.required),
                password : new FormControl('',Validators.required)
              })
  }
  ngOnInit(){
  }

  submitForm(){
    this.authService.login(this.login_frm.value.uName, this.login_frm.value.password).subscribe(
    data => {
      console.log(data);
      this.alertService.presetToast("Logged In");
    },
    error => {
      console.log(error);
      this.alertService.presetToast(error.error.message);
    },
    () => {
      this.navCtrl.navigateRoot('/dashboard');
   })
  }
}
