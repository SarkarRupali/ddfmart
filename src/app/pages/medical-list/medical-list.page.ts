import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from '../../services/env.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-medical-list',
  templateUrl: './medical-list.page.html',
  styleUrls: ['./medical-list.page.scss'],
})
export class MedicalListPage implements OnInit {

 
  public typeDctrs= [];
  public loading = null;
  
  constructor( private nativeStorage: NativeStorage, private http: HttpClient, private env: EnvService, 
               private router : Router, private authService : AuthService, public loadingCtrl: LoadingController) {
               
            this.nativeStorage.getItem('myitem')
            .then(
              data => console.log("medical list",data.token),
              error => console.error(error)
            );
            console.log("medical list")
          }

  ngOnInit() {
    console.log("medical li enter")
  }
  ionViewWillEnter(){
   
    this.typeDctrs = [];
    this.presentLoader();
    this.nativeStorage.getItem('myitem')
    .then(
      data => {
        console.log("medical list",data.token)
            
          // this.http.post('http://bi.xonex.esy.es/wp-json/wp/v2/users', registerData, { 'headers': headers })
          this.http.get(this.env.api_Url+'wp/v2/all-terms?term=speciality').subscribe((data : any[]) => {
  
                console.log("res",data);
                console.log("res",data.length);
                for (let r = 0; r < data.length; r++) {
                  this.typeDctrs.push({
                    id:data[r].term_id,
                    name : data[r].name
                  })
                }
                this.LoaderClose();
                console.log("res1",this.typeDctrs);
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
  opendctrList(id){
    console.log("dfdfs",id);
    this.router.navigate([`/medical-list/${id}`]);
  }

  logout(){
    console.log("fdfdfdf");
    this.authService.logout();
  }

}
