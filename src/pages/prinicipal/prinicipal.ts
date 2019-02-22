import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import {Pagina2Page} from '../index.paginas'

@Component({
  selector: 'page-prinicipal',
  templateUrl: 'prinicipal.html',
})
export class PrinicipalPage {

  pagina2:any = Pagina2Page
  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
  }

  navegar_pagina() {
    this.navCtrl.push(Pagina2Page)
  }

  mostrarMenu() {
    this.menuCtrl.toggle()
  }
}
