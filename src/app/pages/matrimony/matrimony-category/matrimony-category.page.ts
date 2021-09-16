import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../../../services/env.service'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-matrimony-category',
  templateUrl: './matrimony-category.page.html',
  styleUrls: ['./matrimony-category.page.scss'],
})
export class MatrimonyCategoryPage implements OnInit {

  public matrimonyCategory = [];
  public id = 0;
  public loading = null;

  constructor( private nativeStorage: NativeStorage, private http: HttpClient, private env: EnvService, private activatedRoute: ActivatedRoute,
    private router : Router, private authService : AuthService, public loadingCtrl: LoadingController){}

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params.id;
    console.log("res",this.id);
  }

  ionViewWillEnter(){
    this.presentLoader();
    this.nativeStorage.getItem('myitem')
    .then(
      data => {
        console.log("medical list",data.token)
        this.http.get(this.env.api_Url+'wp/v2/matrimony-child-details?matrimony_parent_id='+this.id).subscribe((data : any[]) => {
          this.matrimonyCategory = data;
          console.log("matri",this.matrimonyCategory);
          this.LoaderClose();
        })
      }, error => {
        this.LoaderClose();
        console.log(error);
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
  
  openmatrimonyCategoryList(term_id){
    this.router.navigate([`matrimony/matrimony-category/matrimony-category-type/${term_id}`]);
  }
  
  logout(){
    this.authService.logout();
  }
}
