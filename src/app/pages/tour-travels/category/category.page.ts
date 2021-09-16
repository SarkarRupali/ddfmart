import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../../../services/env.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  public tudata = [];
  id = 0 ;
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
        this.http.get(this.env.api_Url+'wp/v2/all-travels?term_id='+this.id).subscribe((data : any[]) => {
          console.log("res",data);
          console.log("res",data.length);
          this.tudata = data;
          this.LoaderClose();
          console.log("tudata",this.tudata);
        })
      }, error => {
        this.LoaderClose();
        console.log(error);
        //this.alertService.presetToast(error.error.message);
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

    opencategorydetailsPage(id){
      console.log("dfdfs",id);
      this.router.navigate([`/tour-travels/category/category-details/${id}`]);
    }

  logout(){
    this.authService.logout();
  }

}
