import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.page.html',
  styleUrls: ['./loan.page.scss'],
})
export class LoanPage implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }
  logout(){
    this.authService.logout();
  }

}
