import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  constructor(private alertCrtl: AlertController) {

  }

  async onClick() {
    const actionSheet = await this.alertCrtl.create({
      header: 'Correo',
      inputs: [
        {
          type: 'email',
          attributes: {
            pattern: 'email',
            title: 'introduzca correo correctamente',
            placeholder: 'pe: cuenta@dominio.com'
          }
        }
      ],
      buttons: [
        {
          text: 'OK',
          handler: (data) => {
          //TODO buscar algo como document.getElementById('mail').value
            if (data[0].includes('@')) {
              console.log(data);
            } else {
              console.log('error');
            }
          }
        }
      ]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }

}
