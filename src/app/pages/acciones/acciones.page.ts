import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.page.html',
  styleUrls: ['./acciones.page.scss'],
})
export class AccionesPage implements OnInit {

  constructor(private aSController: ActionSheetController) { }

  async onClick() {
    const actionSheet = await this.aSController.create({
      header: 'no hay nada',
      buttons: ['cancel']
    });
    await actionSheet.present();

  }

  ngOnInit() {
  }

}
