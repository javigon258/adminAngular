//import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-ajustes-cuenta',
  templateUrl: './ajustes-cuenta.component.html',
  styles: [
  ]
})
export class AjustesCuentaComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit(): void {
  }

  cambiaColor(tema: string, link:any){

    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);

  }

  aplicarCheck(link: any){

    let select: any = document.getElementsByClassName('selector');
    for(let ref of select){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  marcarCheck(){
    let select: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    for(let ref of select){
      if(ref.getAttribute('data-theme') == tema){
        ref.classList.add('working');
        break;
      }
    }
  }

}
