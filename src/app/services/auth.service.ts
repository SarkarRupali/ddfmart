import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token:any;

  constructor(
    private http: HttpClient,
    private nativeStorage: NativeStorage,
    private env: EnvService,
    private navCtrl : NavController
  ) { }

  login(userName: String, password: String) {
    
    let postData = {
      "username":userName,
      "password":password,

    }
    return this.http.post(this.env.Api_Url,postData
    ).pipe(
      tap(token => {
        console.log("token",token);
        console.log("token",token['token']);
        this.nativeStorage.setItem('myitem', {token: token['token']})
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
   
  }



  logout() {
    // const headers = new HttpHeaders({
    //   'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    // });

    // return this.http.get(this.env.Api_Url + 'auth/logout', { headers: headers })
    // .pipe(
    //   tap(data => {
        this.nativeStorage.remove('myitem');
        this.isLoggedIn = false;
        delete this.token;
        this.navCtrl.navigateRoot('/landing');
        //return data;
    //   })
    // )
  }

  // user() {
  //   const headers = new HttpHeaders({
  //     'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  //   });

  //   return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
  //   .pipe(
  //     tap(user => {
  //       return user;
  //     })
  //   )
  // }

  getToken() {
    return  this.nativeStorage.getItem('myitem').then(
      data => {
        this.token = data.token;

        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
}