import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( ) { }

  // ionViewWillEnter() {
  //   this.authService.getToken().then(() => {
  //     if(this.authService.isLoggedIn) {
  //       this.navCtrl.navigateRoot('/dashboard');
  //     }
  //   });
  // }
}
