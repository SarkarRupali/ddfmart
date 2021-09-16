import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../../services/env.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tour-travels',
  templateUrl: './tour-travels.page.html',
  styleUrls: ['./tour-travels.page.scss'],
})
export class TourTravelsPage implements OnInit {
  public tudata = [];
  public loading = null;

  constructor( private nativeStorage: NativeStorage, private http: HttpClient, private env: EnvService, 
    private router : Router, private authService : AuthService, public loadingCtrl: LoadingController){}
    
  ngOnInit(){}

  ionViewWillEnter(){
    this.presentLoader();
    this.nativeStorage.getItem('myitem')
    .then(
      data => {
        console.log("medical list",data.token)
        this.http.get(this.env.api_Url+'wp/v2/all-terms?term=travel-category').subscribe((data : any[]) => {
          console.log("res",data);
          console.log("res",data.length);
          this.tudata = data;
          this.LoaderClose();
        })
      }, error => {
        console.log(error);
        this.LoaderClose();
        //this.alertService.presetToast(error.error.message);
      });
    }


  openPage(id){
    console.log("dfdfs",id);
    this.router.navigate([`/tour-travels/category/${id}`]);
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
    this.authService.logout();
  }
  
}

