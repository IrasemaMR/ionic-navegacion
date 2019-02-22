import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from "../index.paginas";

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3: any = Pagina3Page
  mutantes:any[] = [
    {
      nombre: 'Magneto',
      poder: 'Controlar mentes'
    },
    {
      nombre: 'Wolverine',
      poder: 'Regeneracióm acelerada'
    },
    {
      nombre: 'Profersor X',
      poder: 'Poderes Psíquicos'
    },
    {
      nombre: 'Gambito',
      poder: 'Cargar objetos inanimados con energía'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  irPagina3 (mutante) {
    console.log(mutante);
    this.navCtrl.push( Pagina3Page, { mutante })
  }

}
