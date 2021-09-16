import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from '../../services/env.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-doctor-name-list',
  templateUrl: './doctor-name-list.page.html',
  styleUrls: ['./doctor-name-list.page.scss'],
})
export class DoctorNameListPage implements OnInit {

  doctorNameList = [];
  myId = null ;
  loading = null ;
  constructor( private nativeStorage: NativeStorage, private http: HttpClient, private env: EnvService, 
               private activatedRoute: ActivatedRoute, private router : Router,private authService : AuthService,
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
    this.myId = this.activatedRoute.snapshot.params.id;
    console.log("res",this.myId);
  }

  ionViewWillEnter(){
    this.doctorNameList = [];
    this.presentLoader();
    this.nativeStorage.getItem('myitem')
    .then(
      data => {
        this.http.get(this.env.api_Url+'wp/v2/all-doctors?term_id='+this.myId).subscribe((data : any[]) => {
  
                console.log("res",data);
                console.log("res",data.length);
                for (let r = 0; r < data.length; r++) {
                  this.doctorNameList.push({
                    id:data[r].id,
                    name : data[r].post_title
                  })
                }
                this.LoaderClose();                         
                console.log("res1",this.doctorNameList);          
          }, error => {
            this.LoaderClose();      
            console.log(error);
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
  opendctrNameList(id){
    this.router.navigate([`/medical-list_details/${id}`]);
  
   // /wp/v2/doctor-details?doctor_id=13
  }

  logout(){
    console.log("fdfdfdf");
    this.authService.logout();
  }

}
