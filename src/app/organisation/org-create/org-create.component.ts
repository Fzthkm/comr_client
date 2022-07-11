import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrgService} from "../../shared/services/org.service";

@Component({
  selector: 'app-org-create',
  templateUrl: './org-create.component.html'
})
export class OrgCreateComponent implements OnInit {
  form!: FormGroup

  constructor(private orgService: OrgService) { }

  ngOnInit(): void {
    this.formInitialize(null)
  }

  onSubmit() {
    this.orgService.create(this.form.value).subscribe()
  }

  formInitialize(value: any){
    this.form = new FormGroup({
      name: new FormControl(value, [Validators.required]),
      region: new FormControl(value, [Validators.required])
    })
  }
}
