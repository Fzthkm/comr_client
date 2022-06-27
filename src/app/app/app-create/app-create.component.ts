import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../../shared/services/app.service";
import {OrgService} from "../../shared/services/org.service";
import {ConsultantService} from "../../shared/services/consultant.service";
import {App, Consultant} from "../../shared/interfaces";

@Component({
  selector: 'app-app-create',
  templateUrl: './app-create.component.html'
})
export class AppCreateComponent implements OnInit {
  form: FormGroup
  orgList: any
  consultList: any
  consultant!: Consultant
  consultantValid: boolean = false
  numberValid!: boolean
  orgValid!: boolean

  constructor(private appService: AppService,
              private orgService: OrgService,
              private consultantService: ConsultantService) {
    this.form = new FormGroup({
      number: new FormControl(null, [Validators.required]),
      date: new FormControl(new Date().toISOString().split('T')[0], [Validators.required]),
      organisation: new FormControl(null, [Validators.required]),
      COVID: new FormControl(null),
      consultantName: new FormControl(null, [Validators.required]),
      patientName: new FormControl(null, [Validators.required]),
      yearOfBirth: new FormControl(null, [Validators.min(1900), Validators.max(new Date().getFullYear()), Validators.pattern('[0-9]{4}')]),
      diagnosis: new FormControl(null, [Validators.required]),
      consultDate: new FormControl(new Date().toISOString().split('T')[0]),
      consultType: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      report: new FormControl(null)
    })
    orgService.getAll().subscribe(
      res => this.orgList = res
    )
    consultantService.getAll().subscribe(
      res => this.consultList = res
    )
  }

  ngOnInit(): void {
  }

  onSubmit() {

    const application: App = {
      number: this.form.value.number,
      date: this.form.value.date,
      patientName: this.form.value.patientName,
      patientYearOfBirth: this.form.value.yearOfBirth,
      organisation: this.form.value.organisation,
      diagnosis: this.form.value.diagnosis,
      COVID: this.form.value.COVID,
      name: this.consultant.name,
      position: this.consultant.position,
      workplace: this.consultant.workplace,
      additionalInfo: this.consultant.additionalInfo,
      type: this.consultant.type,
      consultDate: this.form.value.consultDate,
      consultType: this.form.value.consultType,
      description: this.form.value.description,
      report: this.form.value.description
    }
    this.appService.create(application).subscribe(
      res => alert(`Заявка создана успешно`)
    )
  }

  orgValidCheck(){
    this.orgValid = !!this.orgList.find((org: any) => org.name == this.form.value.organisation)
  }

  consultantValidCheck(){
    this.consultant = this.consultList.find((x: any) => x.name == this.form.value.consultantName)
    this.consultantValid = !!(this.consultant)
  }

  isNumber(){
    let str = this.form.value.number
    this.numberValid = !!(Number(str.replace('/','.'))>=1)
  }
}