import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImovelDetalhesPage } from './imovel-detalhes';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    ImovelDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(ImovelDetalhesPage),
    IonicImageViewerModule,
  ],
})
export class ImovelDetalhesPageModule {}
