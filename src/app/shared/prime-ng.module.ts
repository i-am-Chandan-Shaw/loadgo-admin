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
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
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
    ButtonModule,
    ConfirmPopupModule,
    ToastModule,
    CalendarModule,
    ConfirmDialogModule,
    ProgressSpinnerModule
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
    ButtonModule,
    ConfirmPopupModule,
    ToastModule,
    CalendarModule,
    ProgressSpinnerModule,
    ConfirmDialogModule
  ],
})
export class primeNgModule { }
