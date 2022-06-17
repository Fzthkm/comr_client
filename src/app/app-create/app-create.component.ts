import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-app-create',
  templateUrl: './app-create.component.html',
  styleUrls: ['./app-create.component.sass']
})
export class AppCreateComponent implements OnInit {
  form: FormGroup
  constructor() {
    this.form = new FormGroup({
      number: new FormControl(null),
      date: new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

}
