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
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    this.orgService.create(this.form.value).subscribe(
      ()=> console.log(`Created ${this.form.value}`)
    )
  }

  get name() { return this.form.get('name') }
}
