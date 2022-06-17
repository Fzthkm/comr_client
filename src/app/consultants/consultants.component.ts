import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ConsultantService} from "../shared/services/consultant.service";

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.sass']
})
export class ConsultantsComponent implements OnInit {
  form: FormGroup
  text!: string

  constructor(private consultantService: ConsultantService) {
    this.form = new FormGroup({
      name: new FormControl(null),
      position: new FormControl(null),
      type: new FormControl(null),
      workplace: new FormControl(null),
      additionalInfo: new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    return this.consultantService.create(this.form.value).subscribe(
      ()=> console.log(`Created ${this.form.value}`)
    )
  }

}
