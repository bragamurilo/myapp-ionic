import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  // private apiBase = "https://api.themoviedb.org/3/";
  private apiBase = "http://imobiliariabolsa.com.br/";
  constructor(public http: Http) {
    
  }

  getTopRatedMovies(){
    return this.http.get(this.apiBase + 'json_encode.php');
  }

  getImovel(cod_imovel:number){
    return this.http.get(this.apiBase + 'getImovel.php?cod_imovel='+cod_imovel);
  }

}
