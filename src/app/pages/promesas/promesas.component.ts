import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { 

    //<void> es por si en resolve o reject, no se pasara ningun valor
    //    let promesa = new Promise<void>((resolve, reject) => {

    this.contarTres().then(
      mensaje => console.log("Fin ", mensaje)
      )
    .catch(error => console.error("Error", error));
  }

  ngOnInit(): void {
  }

  contarTres(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      let cont = 0;
      let interval = setInterval(() =>{

        cont +=1;
        console.log(cont);

        if(cont === 3){
          resolve(true);
          //reject('Es un error');
          clearInterval(interval);
        }

      },1000);

    });
  }

}
