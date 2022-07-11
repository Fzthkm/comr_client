import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from "../../shared/services/app.service";
import {App} from "../../shared/interfaces";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html'
})
export class AppListComponent implements OnInit, OnDestroy {
  appList!: any
  aSub: Subscription
  yearList: Array<number> = []
  visible: boolean = false

  constructor(private appService: AppService) {
    this.aSub = this.appService.getAll().subscribe(
      result => this.appList = result
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.aSub.unsubscribe()
  }
}

