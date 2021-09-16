import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nativeStorage: NativeStorage, private authService : AuthService) {

    this.nativeStorage.getItem('myitem')
    .then(
      data => console.log(data.token),
      error => console.error(error)
    );

  }

  logout(){
    console.log("fdfdfdf");
    this.authService.logout();
  }
}
