import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  result: string;
  //inyectado servicio
  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {
  }

  onClick() {
    this.presentActionSheet();
  }
  //método que crea ActionSheet
  //es necesario que sea asincrono porque hay interacción con usuario
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albumes',
      backdropDismiss: false,//rechazar hacer click fuera
      buttons: [{
        text: 'Borrar',
        role: 'destructive', //para ios (saldrá en rojo)
        icon: 'trash-outline', //nombre de icono de ionic
        cssClass: 'rojo', //clase normal de ccs
        handler: () => { //lo que hará al ser pulsado
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle-outline',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

 }
