import { Component } from '@angular/core';

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
  constructor() {}
}
