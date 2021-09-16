import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { AuthService } from '../../../services/auth.service';
import { AlertService } from '../../../services/alert.service';
import { EnvService } from '../../../services/env.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registration_frm : FormGroup

  constructor( private formBuilder : FormBuilder, private router : Router, private authService : AuthService,
                private alertService : AlertService, private navCtrl : NavController, public http: HttpClient,
                private env : EnvService) {
   
    this.registration_frm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.required,Validators.maxLength(50)])),
      uName : new FormControl('', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z_0-9]+$'), 
                                  Validators.maxLength(30)])),
      email: new FormControl('', Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')),
      password : new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$')
      ])),
      cpassword : new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$')
      ])),
      phNo : new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ])),
    }, { 
      validators: this.password.bind(this)
    });
  }

  ngOnInit() {
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: cpassword } = formGroup.get('cpassword');
    return password === cpassword ? null : { passwordNotMatch: true };
  }
  
  // matchpassword(passwordKey: string, passwordConfirmationKey: string) {
  //   return (group: FormGroup) => {
  //     let passwordInput = group.controls[passwordKey],
  //         passwordConfirmationInput = group.controls[passwordConfirmationKey];
  //     if (passwordInput.value !== passwordConfirmationInput.value) {
  //       return passwordConfirmationInput.setErrors({notEquivalent: true})
  //     }
  //     else {
  //         return passwordConfirmationInput.setErrors(null);
  //     }
  //   }
  // }

  get name() {
    return this.registration_frm.get("name");
  }

  get uName() {
    return this.registration_frm.get("uName");
  }
  get email() {
    return this.registration_frm.get("email");
  }

  get cpassword() {
    return this.registration_frm.get("cpassword");
  }

  get phNo() {
    return this.registration_frm.get("phNo");
  }

  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' },
      { type: 'maxlength', message: 'Name cant be longer than 50 characters' }
    ],

    'uName': [
      { type: 'required', message: 'Username is required.' },
      { type: 'pattern', message: 'Please enter a valid username.' },
      { type: 'maxlength', message: 'Username cannot be more than 30 characters long.' },
    ],
  
    'email': [
      { type: 'pattern', message: 'Please enter a valid email address.' },
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'pattern', message: 'Password must be have at least 8 characters long 1 uppercase, 1 lowercase, 1 special character & 1 number' },
    ],
    'cpassword': [
      { type: 'required', message: 'Confirm Password is required.' },
      { type: 'pattern', message: 'Confirm Password must be have at least 8 characters long 1 uppercase, 1 lowercase, 1 special character & 1 number' },
    ],
    'phNo': [
      { type: 'required', message: 'Mobile No is required.' },
      { type: 'pattern', message: 'Please enter a valid mobile number.' },
    ],
  }
  submitForm() {
    console.log(this.registration_frm.value)
    let token;
        
    let postData = {
      "username":"admin",
      "password":"Newuser@123",
    }

    let registerData = {
      "username":this.registration_frm.value.uName,
      "email":this.registration_frm.value.email,
      "password":this.registration_frm.value.password,
      "name":this.registration_frm.value.name,
      "description":this.registration_frm.value.phNo
    }
    console.log(registerData);
    this.http.post(this.env.Api_Url, postData).subscribe(data => {
      console.log("data", data);
      token=data['token'];
      const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Authorization', 'Bearer '+token);
        console.log(token);
        this.http.post('http://bi.xonex.esy.es/wp-json/wp/v2/users', registerData, { 'headers': headers })
        .subscribe(data => {
              console.log(data);
              console.log("id",data['id']);
          if(data){
            this.alertService.presetToast('Succesfully registered');
            this.navCtrl.navigateRoot('/login');
          }
        }, error => {
          console.log(error);
          this.alertService.presetToast(error.error.message);
        });
     }, error => {
      console.log(error);
    });
  }
}


