import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../../../../../services/env.service'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-matrimony-category-details',
  templateUrl: './matrimony-category-details.page.html',
  styleUrls: ['./matrimony-category-details.page.scss'],
})
export class MatrimonyCategoryDetailsPage implements OnInit {
  public matrimonyDetails = [];
  public matriDetailsid = 0;
  public loading = null;

  constructor( private nativeStorage: NativeStorage, private http: HttpClient, private env: EnvService, private activatedRoute: ActivatedRoute,
    private router : Router, private authService : AuthService,public loadingCtrl: LoadingController){}

  ngOnInit(){
    this.matriDetailsid = this.activatedRoute.snapshot.params.id;
    console.log("mId",this.matriDetailsid);
  }

  ionViewWillEnter(){
    this.presentLoader();
    this.nativeStorage.getItem('myitem')
    .then(
      data => {
        console.log("matri list")
        this.http.get(this.env.api_Url+'wp/v2/matrimony-details?matrimony_id='+this.matriDetailsid).subscribe((data : any[]) => {
          this.matrimonyDetails = data;
          console.log("data",data);
          this.LoaderClose();
        })
      }, error => {
        console.log(error);
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
    await this.loading.dismiss();
  }

  
  logout(){
    this.authService.logout();
  }
}
