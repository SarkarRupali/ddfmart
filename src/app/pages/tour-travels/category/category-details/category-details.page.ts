import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from '../../../../services/env.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
// import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {

  // doctorNameList = [];
   id = null ;
   loading=null;
   videUrl = '';
  
    constructor( private nativeStorage: NativeStorage, private http: HttpClient, private env: EnvService, 
                private activatedRoute: ActivatedRoute, private router : Router, private authService : AuthService,
                public loadingController: LoadingController) {
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
      this.presentLoading();
      // this.doctorNameList = [];
      this.nativeStorage.getItem('myitem')
      .then(
        data => {
          this.http.get(this.env.api_Url+'wp/v2/doctor-details?doctor_id='+this.id).subscribe((data : any[]) => {
            console.log("res1",data);
            for (let i = 0; i < data.length; i++) {
              if (data[i].meta_key == "videos1") {
                this.videUrl =  data[i].meta_value;
              }
            }
            this.LoaderClose();
            
            // this.playVideoHosted();
          });
        }, error => {
          this.LoaderClose(); 
          console.log(error);
      })
    }
    async presentLoading() {
      this.loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 4000
      });
      await this.loading.present();
    }

    async LoaderClose(){
      await this.loading.dismiss();
    }
    
    // playVideoHosted() {
    //   this.presentLoading();
    //   console.log('video completed',this.videUrl);
    //   this.videoPlayer.play(this.videUrl).then(() => {
    //     console.log('video completed');
    //   }).catch(err => {
    //     console.log(err);
    //   });
    // }
    
    logout(){
      console.log("fdfdfdf");
      this.authService.logout();
    }
  }
  
  
  