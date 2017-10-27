import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { ImovelDetalhesPage } from '../../pages/imovel-detalhes/imovel-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {  

  public lista_imoveis = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider,
    public modalCtrl: ModalController) {
  }

  openModalFilter(){
    const modalFilter: Modal = this.modalCtrl.create('ModalFilterPage');
    modalFilter.present();
    modalFilter.onDidDismiss((data) => {
      console.log(data);
    });
  }

  goToImovelDetalhes(cod_imovel:number){
    this.navCtrl.push(ImovelDetalhesPage, {"cod_imovel": cod_imovel});
  }

  ionViewDidLoad() {
    this.movieProvider.getTopRatedMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_imoveis = objeto_retorno.imoveis;
      },
    error => {
      console.log(error);
    });
  }

}
