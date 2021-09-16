import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-job-loan',
  templateUrl: './job-loan.page.html',
  styleUrls: ['./job-loan.page.scss'],
})
export class JobLoanPage implements OnInit {

  constructor(private authService : AuthService ) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
