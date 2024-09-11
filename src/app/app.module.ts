import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleTableComponent } from './shared/components/simple-table/simple-table.component';
import { TooltipVisibilityDirective } from './shared/directives/tooltip-visibility.directive';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SimpleTableComponent,
    TooltipVisibilityDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
