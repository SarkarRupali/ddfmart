import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from '../../services/env.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements OnInit {

  public typeJob = [];
  public loading = null;

  constructor( private nativeStorage: NativeStorage, private http: HttpClient, private env: EnvService, 
    private router : Router, private authService : AuthService, public loadingCtrl: LoadingController){
      this.nativeStorage.getItem('myitem')
      .then(
        data => console.log("medical list",data.token),
        error => console.error(error)
      );
      console.log("medical list")
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.typeJob = [];
    this.presentLoader();
    this.nativeStorage.getItem('myitem')
    .then(
      data => {
        console.log("medical list",data.token)
            
          // this.http.post('http://bi.xonex.esy.es/wp-json/wp/v2/users', registerData, { 'headers': headers })
          this.http.get(this.env.api_Url+'wp/v2/all-terms?term=job-category').subscribe((data : any[]) => {
                console.log("res",data);
                console.log("res",data.length);
                for (let r = 0; r < data.length; r++) {
                  this.typeJob.push({
                    id:data[r].term_id,
                    name : data[r].name
                  })


                }
                this.LoaderClose();      
          }, error => {
            console.log(error);
            this.LoaderClose();      
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
  opendjobList(id){
    this.router.navigate([`job/job-category/${id}`]);
  }

  logout(){
    this.authService.logout();
  }
}
