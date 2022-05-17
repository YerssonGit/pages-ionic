import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  varialbeMostar: string = null;

  constructor(private activaredRouter: ActivatedRoute) {}

  ngOnInit() {
    this.varialbeMostar = this.activaredRouter.snapshot.paramMap.get('id');
  }
}
