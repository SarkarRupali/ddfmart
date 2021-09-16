import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../../../../services/env.service'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-matrimony-category-type',
  templateUrl: './matrimony-category-type.page.html',
  styleUrls: ['./matrimony-category-type.page.scss'],
})
export class MatrimonyCategoryTypePage implements OnInit {

  public matrimonyTypeCategory = [];
  public ctypeid = 0;
  public loading = null;

  constructor( private nativeStorage: NativeStorage, private http: HttpClient, private env: EnvService, private activatedRoute: ActivatedRoute,
    private router : Router, private authService : AuthService, public loadingCtrl: LoadingController){}

  ngOnInit(){
    this.ctypeid = this.activatedRoute.snapshot.params.id;
    console.log("res",this.ctypeid);
  }

  ionViewWillEnter(){
    this.presentLoader();
    this.nativeStorage.getItem('myitem')
    .then(
      data => {
        console.log("medical list",data.token)
        this.http.get(this.env.api_Url+'wp/v2/all-matrimony?term_id='+this.ctypeid).subscribe((data : any[]) => {
          this.matrimonyTypeCategory = data;
          this.LoaderClose();
        })
        
      }, error => {
        console.log(error);
        this.LoaderClose();
      });
  }

  openmatrimonyDetailsCategory(detailsid){
    this.router.navigate([`matrimony/matrimony-category/matrimony-category-type/matrimony-category-details/${detailsid}`]);
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
