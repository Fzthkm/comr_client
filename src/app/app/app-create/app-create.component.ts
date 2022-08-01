import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../../shared/services/app.service";
import {OrgService} from "../../shared/services/org.service";
import {ConsultantService} from "../../shared/services/consultant.service";
import {App, Consultant} from "../../shared/interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-create',
  templateUrl: './app-create.component.html'
})
export class AppCreateComponent implements OnInit {
  form: FormGroup
  orgList: any
  consultList: any
  consultant!: Consultant
  consultantValid!: boolean
  numberValid!: boolean
  orgValid!: boolean

  constructor(private appService: AppService,
              private orgService: OrgService,
              private consultantService: ConsultantService,
              private router: Router) {
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
      report: this.form.value.report
    }
    this.appService.create(application).subscribe(
      res => alert(`Заявка создана успешно`)
    )
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  getLastRecord(){
    this.appService.getLast().subscribe( last =>
    {
      this.form = new FormGroup({
        number: new FormControl(Number(last.number) + 1, [Validators.required]),
        date: new FormControl(last.date, [Validators.required]),
        organisation: new FormControl(last.organisation, [Validators.required]),
        COVID: new FormControl(last.COVID),
        consultantName: new FormControl(last.name, [Validators.required]),
        patientName: new FormControl(last.patientName, [Validators.required]),
        yearOfBirth: new FormControl(last.patientYearOfBirth, [Validators.min(1900), Validators.max(new Date().getFullYear()), Validators.pattern('[0-9]{4}')]),
        diagnosis: new FormControl(last.diagnosis, [Validators.required]),
        consultDate: new FormControl(last.consultDate),
        consultType: new FormControl(last.consultType, [Validators.required]),
        description: new FormControl(last.description),
        report: new FormControl(last.report)
      })
      console.log(last.number)
      this.orgValidCheck()
      this.consultantValidCheck()
      this.isNumber(""+last.number)
    }
    )
  }

  orgValidCheck(){
    this.orgValid = !!this.orgList.find((org: any) => org.name == this.form.value.organisation)
  }

  consultantValidCheck(){
    this.consultant = this.consultList.find((x: any) => x.name == this.form.value.consultantName)
    this.consultantValid = !!(this.consultant)
  }

  isNumber(str: string){
    this.numberValid = !!(Number(str.replace('/','.'))>=1)
  }
}
