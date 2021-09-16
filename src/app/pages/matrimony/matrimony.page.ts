import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../../services/env.service'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-matrimony',
  templateUrl: './matrimony.page.html',
  styleUrls: ['./matrimony.page.scss'],
})
export class MatrimonyPage implements OnInit {

  public matrimonyCategry = [];
  public loading = null;
  constructor( private nativeStorage: NativeStorage, private http: HttpClient, private env: EnvService, private activatedRoute: ActivatedRoute,
    private router : Router, private authService : AuthService,public loadingCtrl: LoadingController){
  
  }

  ngOnInit(){
  
  }

  ionViewWillEnter(){
    this.presentLoader();
    this.nativeStorage.getItem('myitem')
    .then(
      data => {
        console.log("medical list",data.token)
        this.http.get(this.env.api_Url+'wp/v2/all-mat-terms?term=matrimony-category').subscribe((data : any[]) => {
          this.matrimonyCategry = data;
          this.LoaderClose();
          console.log("matri",this.matrimonyCategry);
        })
        console.log('Entry Lasting');
      }, error => {
        this.LoaderClose();
        console.log(error);
      });
  }

  openmCategoryList(term_id){
    this.router.navigate([`matrimony/matrimony-category/${term_id}`]);
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