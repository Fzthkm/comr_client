import {Component, OnInit} from '@angular/core';
import {ConsultantService} from "../shared/services/consultant.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-consultant-list',
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.sass']
})
export class ConsultantListComponent implements OnInit {

  obj: any
  text!: string
  aSub: Subscription

  constructor(private ConsultantService: ConsultantService) {
    this.aSub = this.ConsultantService.getAll().subscribe(result => {
      this.obj = result.sort((a,b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    })
  }

  ngOnInit(): void {
  }

  filterByName() {
    this.aSub = this.ConsultantService.getAll().subscribe(result => {
      this.obj = result.filter(result => result.name.includes(this.text))
    })
  }

  select(o: any) {
    console.log(o);
  }
}
