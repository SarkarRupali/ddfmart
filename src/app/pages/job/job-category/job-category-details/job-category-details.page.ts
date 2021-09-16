import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../../../../services/env.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-job-category-details',
  templateUrl: './job-category-details.page.html',
  styleUrls: ['./job-category-details.page.scss'],
})
export class JobCategoryDetailsPage implements OnInit {

  public jobdetailsdata = [];
  jid = 0 ;
  designation : '';
  address : '';
  qualification : '';
  openTime : '';
  closeTime : '';
  loading = null;

  constructor( private nativeStorage: NativeStorage, private http: HttpClient, private env: EnvService, private activatedRoute: ActivatedRoute,
    private router : Router, private authService : AuthService,public loadingCtrl: LoadingController){  
  }

  ngOnInit(){
    this.jid = this.activatedRoute.snapshot.params.id;
    console.log("res",this.jid);
  }

  ionViewWillEnter(){
    this.presentLoader();
    this.nativeStorage.getItem('myitem')
    .then(
      data => {
        console.log("medical list",data.token)
        this.http.get(this.env.api_Url+'wp/v2/job-details?job_id='+this.jid).subscribe((data : any[]) => {
          // this.jobdetailsdata = data;
          console.log("tudata",this.jobdetailsdata);
          
          for (let i = 0; i < data.length; i++) {
            console.log("data[i].meta_value",data[i].meta_value);
            if (data[i].meta_key == "designation") {
              this.designation =  data[i].meta_value;
            }

            if (data[i].meta_key == "address") {
              this.address =  data[i].meta_value;
            }

            if (data[i].meta_key == "qualification"){
              this.qualification =  data[i].meta_value;
            }
            if (data[i].meta_key =="opening_date"){
              this.openTime =  data[i].meta_value;
            }
            if (data[i].meta_key =="closing_date"){
              this.closeTime =  data[i].meta_value;
            }
          }
          console.log('entry last');
        
          this.LoaderClose();   
        })
     
      }, error => {
        this.LoaderClose();
      });
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
      console.log('testE');
      
      await this.loading.dismiss();
    }


  logout(){
    this.authService.logout();
  }

}
