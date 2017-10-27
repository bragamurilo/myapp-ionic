import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { ImageViewerController } from "ionic-img-viewer";
import { CurrencyPipe } from '@angular/common';
/**
 * Generated class for the ImovelDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imovel-detalhes',
  templateUrl: 'imovel-detalhes.html',
  providers: [
    MoovieProvider,
    CurrencyPipe
  ]
})
export class ImovelDetalhesPage {
  private cod_imovel:number;
  public imovel_detalhes = new Array<any>();
  public imovel_fotos = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public imageViewerCtrl: ImageViewerController,
    public currencyPipe: CurrencyPipe,
    private movieProvider: MoovieProvider
  ) {
    let cod_imovel = navParams.get('cod_imovel');
    this.cod_imovel = cod_imovel;
  }

  onClick(imageToView) {
    const viewer = this.imageViewerCtrl.create(imageToView)
    viewer.present();
  }

  private getCurrency(valor){
    valor = this.currencyPipe.transform(valor, 'BRL', true, '1.2-2');
    valor = valor.replace('.', '|').replace(',', '.').replace(',', '.').replace('|', ',');
    return valor;
  }

  ionViewDidLoad() {
    this.movieProvider.getImovel(this.cod_imovel).subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.imovel_detalhes = objeto_retorno;    
        this.imovel_fotos = this.imovel_detalhes['fotos'];    
        this.imovel_detalhes['valor_venda'] = this.getCurrency(this.imovel_detalhes['valor_venda']);              
      },
    error => {
      console.log('Deu errro: '+ error);
    });
  }

}
