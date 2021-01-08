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

  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeProperty() {
    this.properties.danger = !this.properties.danger;
  }

  saveChanges() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
