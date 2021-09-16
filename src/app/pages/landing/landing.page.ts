import { Component, OnInit } from '@angular/core';
import { RegisterPage } from '../auth/register/register.page';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor( private authService : AuthService, private navCtrl:  NavController) { }

  ionViewWillEnter() {
    this.authService.getToken().then(() => {
      if(this.authService.isLoggedIn) {
        this.navCtrl.navigateRoot('/dashboard');
      }
    });
  }

  ngOnInit() {
  }

}
