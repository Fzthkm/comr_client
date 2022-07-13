import {Component, OnInit} from '@angular/core';
import {ConsultantService} from "../../shared/services/consultant.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-consultant-list',
  templateUrl: './consultant-list.component.html'
})
export class ConsultantListComponent implements OnInit {

  list: any
  text!: string
  aSub: Subscription

  constructor(private ConsultantService: ConsultantService) {
    this.aSub = this.ConsultantService.getAll().subscribe(result => {
      this.list = result.sort((a,b) => {
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
      this.list = result.filter(result => result.name.toUpperCase().includes(this.text.toUpperCase()))
    })
  }
}
