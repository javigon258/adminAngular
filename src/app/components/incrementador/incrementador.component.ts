import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef}  from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;


  @Input() porcentaje: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    //console.log('leyenda', this.leyenda);
    //console.log('porcentaje', this.porcentaje);
  }

  ngOnInit(): void {
    //console.log('leyenda', this.leyenda);
    //console.log('porcentaje', this.porcentaje);
  }

  onChange(newValue:number){

    //let elemHtml:any = document.getElementsByName('porcentaje')[0];
    //console.log(this.txtProgress);

    //console.log(elemHtml.value);

    //console.log(window.event);

    if(newValue >= 100){
      this.porcentaje = 100;
    }else if(newValue <= 0){
      this.porcentaje = 0;
    }else{
      this.porcentaje = newValue;
    }

    //elemHtml.valur = Number(this.porcentaje);
    this.txtProgress.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor(valor: number) {
    if(this.porcentaje >= 100 && valor > 0){
      this.porcentaje = 100;
      return;
    }
    if(this.porcentaje <= 100 && valor < 0){
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit(this.porcentaje);

    this.txtProgress.nativeElement.focus();
  }
}
