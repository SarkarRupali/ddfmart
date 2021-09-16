import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private inApp : InAppBrowser, private platform : Platform) {}

  ngOnInit(){ 
    this.platform.ready().then(() => {
      //const browser = this.inApp.create('www.ddfreshmart.com','_self',{location:'no', zoom:'no'});
      const browser = this.inApp.create('http://www.ddfreshmart.com','_blank',{location:'no', zoom:'no',navigationbuttoncolor: '#ffffff',
      hideurlbar: 'yes'});
      // browser.on('exit').subscribe(() => {
      //   // this.platform.exitApp();   
      //   navigator['app'].exitApp();      
      // });
      browser.show();
    });
  }

}
