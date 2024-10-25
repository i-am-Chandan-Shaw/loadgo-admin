import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { UserComponent } from './user/user.component';
import { TripComponent } from './trip/trip.component';


const routes: Routes = [
  { path: 'overview', component: DriverComponent, },
  { path: 'driver', component: DriverComponent, },
  { path: 'user', component: UserComponent, },
  { path: 'trip', component: TripComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
