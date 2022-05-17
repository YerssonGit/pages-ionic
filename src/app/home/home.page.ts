import { Component } from '@angular/core';
import { Router } from '@angular/Router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaDinamica: Array<any> = [
    { titulo: 'Super Mario', consola: 'ENES' },
    { titulo: 'Sonic', consola: 'nose' },
    { titulo: 'zelda', consola: 'nintendo' },
    { titulo: 'Halo', consola: 'x-box' },
    { titulo: 'God of ware', consola: 'play station' },
  ];
  input1: string = null;
  constructor(private router: Router, private navControl: NavController) {}

  callAngular() {
    console.log('funciona');
    this.router.navigate(['/pagina2', this.input1]);
  }
  callIonic3() {
    console.log('boton 3');
    this.navControl.navigateForward(`/page2${this.input1}`);
  }
}
