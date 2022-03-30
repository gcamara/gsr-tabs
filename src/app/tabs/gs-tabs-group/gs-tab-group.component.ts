import { AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GsTabComponent } from '../gs-tab/gs-tab.component';

@Component({
  selector: 'gs-tab-group',
  templateUrl: './gs-tab-group.component.html',
  styleUrls: ['./gs-tab-group.component.scss']
})
export class GsTabGroupComponent implements AfterViewInit {

  @ContentChildren(GsTabComponent)
  tabs!: QueryList<GsTabComponent>;

  activeTab$ = new BehaviorSubject<GsTabComponent | undefined>(undefined);

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => this.activeTab$.next(this.tabs.first));
  }

}
