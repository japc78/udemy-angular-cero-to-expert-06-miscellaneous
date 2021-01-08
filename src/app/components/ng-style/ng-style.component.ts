import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <h3>NgStyle</h3>
    <p [style.fontSize.px]="fontSize">
      Hola mundo esta es una etiqueta
    </p>

    <button type="button" class="btn btn-outline-primary" (click)="fontSize = fontSize + 5">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
    <button type="button" class="btn btn-outline-primary ml-2" (click)="fontSize = fontSize - 5">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </button>

  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  fontSize: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
