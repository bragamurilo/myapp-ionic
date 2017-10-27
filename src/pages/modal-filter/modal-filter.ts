import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-filter',
  templateUrl: 'modal-filter.html',
})
export class ModalFilterPage {
  public objeto_parametros = {
    'cidade'     : '',
    'bairro'     : '',
    'tipo_imovel': '',
    'quartos'    : '',
    'garagens'   : ''
  }
  constructor(private navParams: NavParams, private view: ViewController) {
  }

  closeModalFilter(){
    this.objeto_parametros.cidade = 'Bauru';
    this.objeto_parametros.bairro = 'centro';
    this.view.dismiss(this.objeto_parametros);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFilterPage');
  }

}
