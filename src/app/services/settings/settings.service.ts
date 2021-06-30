import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }

  constructor(@Inject(DOCUMENT) private _document) { 
    this.cargarAjuste();
  }

  guardarAjustes(){
    //console.log('Guardado del localStorage')
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));    
  }

  cargarAjuste(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      //console.log('Carga guardado');

      this.aplicarTema(this.ajustes.tema);
    }else{
      //console.log('Sin cambios');
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema: string){

    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href',url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    
    this.guardarAjustes();
  }
}

interface Ajustes{
  temaUrl: string;
  tema: string;
}