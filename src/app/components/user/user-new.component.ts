import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-new',
  template: `
    <p>
      user-new works! UserId: {{idUser}}
    </p>
  `,
  styles: [
  ]
})
export class UserNewComponent implements OnInit {
  idUser: number;

  constructor( private router: ActivatedRoute) {
    this.router.parent.params.subscribe( params => {
      this.idUser = params.id;
    });
   }

  ngOnInit(): void {
  }

}
