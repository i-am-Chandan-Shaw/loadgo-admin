import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DriverComponent } from './pages/driver/driver.component';
import { UserComponent } from './pages/user/user.component';
import { TripComponent } from './pages/trip/trip.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'overview', component: DriverComponent, },
      { path: 'driver', component: DriverComponent, },
      { path: 'user', component: UserComponent, },
      { path: 'trip', component: TripComponent, },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
