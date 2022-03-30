import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsTabGroupComponent } from './gs-tabs-group/gs-tab-group.component';
import { GsTabComponent } from './gs-tab/gs-tab.component';



@NgModule({
  declarations: [
    GsTabGroupComponent,
    GsTabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GsTabGroupComponent,
    GsTabComponent
  ]
})
export class TabsModule { }
