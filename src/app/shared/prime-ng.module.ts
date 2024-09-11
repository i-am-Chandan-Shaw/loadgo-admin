import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    TooltipModule,
    DropdownModule,
    TabViewModule,
    ScrollPanelModule,
    FormsModule,
    OverlayPanelModule,
    DialogModule,
    SplitButtonModule,
    ButtonModule
  ],
  exports: [
    TooltipModule,
    DropdownModule,
    TabViewModule,
    ScrollPanelModule,
    FormsModule,
    OverlayPanelModule,
    DialogModule,
    SplitButtonModule,
    ButtonModule
  ],
})
export class primeNgModule { }
