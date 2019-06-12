import { Component } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public actionSheet: ActionSheetController, private  alertController: AlertController) {}

  async presentAlert(){
    const alert = await  this.alertController.create({
      header: 'alert',
      subHeader: 'Sub Alert',
      message: 'Message',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Clicked');
        }
      },
        {
          text: 'Okay',
          cssClass: 'secondary',
          handler: () => {
            console.log('TP');
          }
        }
      ]

    });
    await  alert.present();
  }

  async presentActionSheet() {
      const actionSheet = await this.actionSheet.create({
      header : 'Test Action Sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'trash',
          handler: () => {
            console.log('Clicked');
          }
        },
        {
          text: 'Hello',
          role: 'destructive',
          icon: 'add',
          handler: () => {
            console.log('Added');
          }
        },
        {
          text: 'Hello',
          role: 'destructive',
          icon: 'add',
          handler: () => {
            console.log('Added');
          }
        },
        {
          text: 'Hello',
          role: 'destructive',
          icon: 'add',
          handler: () => {
            console.log('Added');
          }
        }
        ]
    });
      await actionSheet.present();

  }

}
