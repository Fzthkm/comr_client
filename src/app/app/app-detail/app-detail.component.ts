import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../../shared/services/app.service";
import {App, Consultant} from "../../shared/interfaces";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrgService} from "../../shared/services/org.service";
import {ConsultantService} from "../../shared/services/consultant.service";

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.sass']
})
export class AppDetailComponent implements OnInit, OnDestroy {
  id!: string
  aSub!: Subscription
  form!: FormGroup
  orgList: any
  consultList: any
  consultant!: Consultant
  consultantValid: boolean = true
  numberValid: boolean = true
  orgValid: boolean = true


  constructor(private route:ActivatedRoute,
              private appService: AppService,
              private orgService: OrgService,
              private consultantService: ConsultantService) {
    this.aSub =  this.route.paramMap.subscribe(params => {
      this.id = <string>params.get('id')
      this.appService.getById(this.id).subscribe(res => {
        this.form = new FormGroup({
          number: new FormControl(res.number, [Validators.required]),
          date: new FormControl(res.date,[Validators.required]),
          organisation: new FormControl(res.organisation, [Validators.required]),
          COVID: new FormControl(res.COVID),
          consultantName: new FormControl(res.name, [Validators.required]),
          patientName: new FormControl(res.patientName, [Validators.required]),
          yearOfBirth: new FormControl(res.patientYearOfBirth, [Validators.min(1900), Validators.max(new Date().getFullYear()), Validators.pattern('[0-9]{4}')]),
          diagnosis: new FormControl(res.diagnosis, [Validators.required]),
          consultDate: new FormControl(res.consultDate),
          consultType: new FormControl(res.consultType, [Validators.required]),
          description: new FormControl(res.description),
          report: new FormControl(res.report)
        })
        console.log(this.id)
      })
    })
    orgService.getAll().subscribe(
      res => this.orgList = res
    )
    consultantService.getAll().subscribe(
      res => this.consultList = res
    )
    this.consultantValidCheck()
    this.orgValidCheck()
    this.isNumber()
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.aSub.unsubscribe()
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
    this.appService.update(this.id, application)
  }

  remove(){
    this.appService.remove(this.id)
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
    this.numberValid = Boolean((Number(str.replace('/', '.')) >= 1))
  }
}
