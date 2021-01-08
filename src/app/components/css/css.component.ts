import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <h3>CSS a un solo componente</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint laudantium voluptas doloribus, neque sit obcaecati veniam assumenda, dolorem placeat dignissimos totam tenetur? Suscipit, cumque tempora? Pariatur quaerat consequuntur modi ullam.</p>
  `,
  styles: [`
    p {
      color: red;
      font-size: 20px
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
