import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  constructor(private alertController: AlertController) {}
  //primer ejemplo
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      backdropDismiss: false,
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  //segundo ejemplo
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Alerta multiboton',
      backdropDismiss: false,
      subHeader: 'es diferente al primero',
      message: 'ahora hay dos opciones',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('ok pulsado');
          }
        },
        {
          text: 'Cancelar',
          cssClass: 'rojo',
          role: 'cancel' //no necesita handler
        },
      ]
    });

    await alert.present();
  }

   //tercer ejemplo
   async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Prompt',
      inputs: [
        {
          name: '1',
          type: 'text',
          placeholder: 'escriba dato 1'
        },
        {
          name: '2',
          type: 'text',
          id:'clave2', //para poder rescatar el valor introducido
          value:'hello', //valor por defecto
          placeholder: 'escriba dato 2'
        },
        {
          name: '3',
          id:'claveParrafo',
          type: 'textarea', //para quye pueda ser multilinea
          value:'hello', //valor por defecto
          placeholder: 'escriba dato 3'
        },
        {
          name: '4',
          type: 'url', //para que sea enlace
          value:'http://google.es',
          placeholder: 'escriba buscador'
        },
        {
          name: '5',
          type: 'date', //fecha
          min: '2015-03-03',
          max: '2023-03-03'
        },
        {
          name: '6',
          type: 'number'
        },
        {
          name: '7',
          type: 'password', //no se verá el contenido
          placeholder: 'contraseña',
          cssClass: 'especial',
          attributes:{ //para darle formato
            maxlength: 4, //longitud maxima
            inputmode: 'decimal' //serán numeros, saldrá teclado numérico
          }
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'secondary',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'OK',
          handler: (data: any) => {
            console.log(data);
            console.table(data);
          }
        },
      ]
    });

    await alert.present();
  }

 //cuarto ejemplo
  async presentAlert4() {
    const alert = await this.alertController.create({
      header: 'Introduce Datos',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'nombre'
        },
        {
          placeholder: 'nick (8 caracteres máx)',
          attributes: {
            maxlength:8
          }
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 150
        },
        {
          type: 'textarea',
          placeholder: 'algo sobre ti'
        }
      ]
    });

    await alert.present();
  }
  //quinto ejemplo
  async presentAlert5() {
    const alert = await this.alertController.create({
      header: 'dime tu color',
      buttons: ['OK'],
      inputs: [
        {
          label: 'rojo',
          type: 'radio',
          value: 'red'
        },
        {
          label: 'azul',
          type: 'radio',
          value: 'blue'
        },
        {
          label: 'verde',
          type: 'radio',
          value: 'green'
        },
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
