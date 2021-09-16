import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor( private toastController : ToastController) { }

  async presetToast(mesage:any){
    const toast = await this.toastController.create({
      message : mesage,
      duration : 2000,
      position : 'middle',
      color : 'dark'
    });
    toast.present();
  }
}
