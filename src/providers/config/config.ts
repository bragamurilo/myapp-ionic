import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: '',
    username: ''
  }
  
  constructor() {
   
  }

  getConfigDate():any{
    return localStorage.getItem("config");
  }

  setConfigDate(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false,
      name: '',
      username: ''
    };

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }

    if(username){
      config.username = username;
    }

    localStorage.setItem("config", JSON.stringify(config));
  }

}
