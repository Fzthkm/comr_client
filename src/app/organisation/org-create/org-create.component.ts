import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrgService} from "../../shared/services/org.service";

@Component({
  selector: 'app-org-create',
  templateUrl: './org-create.component.html'
})
export class OrgCreateComponent implements OnInit {
  form!: FormGroup
  regionList = [
    "Брестская область",
    "Витебская область",
    "Гомельская область",
    "Гродненская область",
    "Минская область",
    "Могилевская область",
    "г.Минск",
    "РНПЦ"
  ]
  regionValid: boolean = false

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

  regionValidCheck(){
    this.regionValid = !!this.regionList.find((region) => region === this.form.value.region)
  }
}
