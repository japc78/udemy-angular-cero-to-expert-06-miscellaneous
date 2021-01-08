import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <hr>

    <app-css></app-css>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sed eius nesciunt ipsa necessitatibus reiciendis, eligendi sapiente architecto deleniti id delectus. Veritatis necessitatibus est vel dicta, et recusandae quibusdam excepturi.</p>
    <hr>

    <app-class></app-class>
    <hr>

    <div>
        <h3>Directivas personalizadas</h3>
        <p>Lorem ipsum dolor sit <span [appHighlighted]="'orange'">amet consectetur adipisicing elit.</span> Voluptates natus libero ullam quos voluptate praesentium enim error repudiandae officia pariatur minus fuga id perferendis odio, veniam aliquid at est quo!</p>
    </div>
    <hr>

    <app-ng-switch></app-ng-switch>
    <hr>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
