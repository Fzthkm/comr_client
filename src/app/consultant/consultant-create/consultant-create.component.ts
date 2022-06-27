import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConsultantService} from "../../shared/services/consultant.service";

@Component({
  selector: 'app-consultant-create',
  templateUrl: './consultant-create.component.html'
})
export class ConsultantCreateComponent implements OnInit {
  form: FormGroup

  constructor(private consultantService: ConsultantService) {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      position: new FormControl(null),
      type: new FormControl(null, [Validators.required]),
      workplace: new FormControl(null, [Validators.required]),
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
