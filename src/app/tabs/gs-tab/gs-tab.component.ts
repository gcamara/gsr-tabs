import { 
  Component,
  EventEmitter, 
  Host, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Output, 
  TemplateRef, 
  ViewChild 
} from '@angular/core';
import { Subscription } from 'rxjs';
import { GsTabGroupComponent } from '../gs-tabs-group/gs-tab-group.component';

@Component({
  selector: 'gs-tab',
  templateUrl: './gs-tab.component.html',
  styleUrls: ['./gs-tab.component.scss']
})
export class GsTabComponent implements OnInit {

  @HostBinding('class.active')
  active = false;

  @Input()
  label = '';

  @Input()
  alerts = 0;

  @Output()
  onActive = new EventEmitter<any>();

  @ViewChild('tabContent', { read: TemplateRef })
  templateRef!: TemplateRef<any>;

  private _activeTabSub!: Subscription;

  constructor(@Host() private parent: GsTabGroupComponent) { }

  ngOnInit(): void {
    this._activeTabSub = this.parent.activeTab$
      .subscribe((tab?: GsTabComponent) => {
        this.active = tab === this;
      });
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    this.parent.activeTab$.next(this);
    this.onActive.emit(event);
  }

  @HostBinding('class.badge')
  get hasAlerts(): boolean {
    return this.alerts > 0;
  }

  onDestroy() {
    this._activeTabSub?.unsubscribe();
  }

}
