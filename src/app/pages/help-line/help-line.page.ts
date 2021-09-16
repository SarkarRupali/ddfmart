import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-help-line',
  templateUrl: './help-line.page.html',
  styleUrls: ['./help-line.page.scss'],
})
export class HelpLinePage implements OnInit {

  constructor( private authService : AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
