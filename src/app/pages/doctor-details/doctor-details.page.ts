import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from '../../services/env.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.page.html',
  styleUrls: ['./doctor-details.page.scss'],
})
export class DoctorDetailsPage implements OnInit {
  doctorNameList = [];
  id = null ;
  content : any;
  specialist : '';
  address : '';
  openTime : '';
  closeTime : '';
  regNo : 0;
  loading = null ;
  constructor( private nativeStorage: NativeStorage, private http: HttpClient, private env: EnvService, 
               private activatedRoute: ActivatedRoute, private router : Router, private authService : AuthService,
               private loadingCtrl : LoadingController) {
                this.nativeStorage.getItem('myitem')
    .then(
      data => console.log("medical list",data.token),
      error => console.error(error)
    );
    console.log("medical list")
  }

  ngOnInit() {
    // http://bi.xonex.esy.es/wp-json/wp/v2/all-doctors?term_id=6
    this.id = this.activatedRoute.snapshot.params.id;
    console.log("res",this.id);
  }

  ionViewWillEnter(){
    this.doctorNameList = [];
    this.presentLoader();
    this.nativeStorage.getItem('myitem')
    .then(
      data => {
        this.http.get(this.env.api_Url+'wp/v2/doctor-details?doctor_id='+this.id).subscribe((data : any[]) => {
          for (let i = 0; i < data.length; i++) {
            if (data[i].meta_key == "designation") {
              this.content =  data[i].meta_value;
            }

            if (data[i].meta_key == "specialist") {
              this.specialist =  data[i].meta_value;
            }

            if (data[i].meta_key == "reg_no"){
              this.regNo =  data[i].meta_value;
            }

            if (data[i].meta_key == "address"){
              this.address =  data[i].meta_value;
            }

            if (data[i].meta_key =="opening_time"){
              this.openTime =  data[i].meta_value;
            }
            if (data[i].meta_key =="closing_time"){
              this.closeTime =  data[i].meta_value;
            }
          }   
          this.LoaderClose();      
          }, error => {
            console.log(error);
            this.LoaderClose();      
            //this.alertService.presetToast(error.error.message);
          });
       }, error => {
        console.log(error);
    })
  }
  async presentLoader(){
    this.loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      backdropDismiss: true,
      message: 'Loding...',
    });
    await this.loading.present();
  }
  async LoaderClose(){
    await this.loading.dismiss();
  }
  
  logout(){
    console.log("fdfdfdf");
    this.authService.logout();
  }
}


