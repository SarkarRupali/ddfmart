import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  logout(){
    console.log("fdfdfdf");
    this.authService.logout();
  }

}
