import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrgService} from "../shared/services/org.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-org-list',
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.sass']
})
export class OrgListComponent implements OnInit, OnDestroy {

  list: any
  text!:string
  aSub: Subscription
  constructor(private OrgService: OrgService) {
    this.aSub = this.OrgService.getAll().subscribe(result => this.list = result.sort((a,b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }))
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.aSub.unsubscribe()
  }

  filterByName() {
    this.aSub = this.OrgService.getAll().subscribe(result => {
      this.list = result.filter(result => result.name.includes(this.text))
    })
  }
}
