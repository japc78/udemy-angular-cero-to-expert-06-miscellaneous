import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: [
  ]
})
export class ClassComponent implements OnInit {

  msgAlert: string = 'alert-danger';
  properties = {
    danger: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeProperty() {
    this.properties.danger = !this.properties.danger;
  }

}
