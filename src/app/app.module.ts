import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleTableComponent } from './shared/components/simple-table/simple-table.component';
import { TooltipVisibilityDirective } from './shared/directives/tooltip-visibility.directive';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DriverComponent } from './pages/driver/driver.component';
import { UserComponent } from './pages/user/user.component';
import { TripComponent } from './pages/trip/trip.component';
import { FormatCoordinateAddressPipe } from './shared/pipes/format-coordinate-address.pipe';
import { FormatDateTimePipe } from './shared/pipes/format-date-time.pipe';
import { ViewEditDriverComponent } from './pages/modals/view-edit-driver/view-edit-driver.component';
import { ViewDriverDocumentsComponent } from './pages/modals/view-driver-documents/view-driver-documents.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SimpleTableComponent,
    TooltipVisibilityDirective,
    DriverComponent,
    UserComponent,
    TripComponent,
    FormatCoordinateAddressPipe,
    FormatDateTimePipe,
    ViewEditDriverComponent,
    ViewDriverDocumentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule

  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
