import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { VrInfoComponent } from './components/vr-info/vr-info.component';
import { VrListComponent } from './components/vr-list/vr-list.component';
import { SignoutComponent } from './components/signout/signout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'signout',
    component: SignoutComponent
  },
  {
    path: 'vr',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component: VrListComponent,
            canActivate: [AuthGuard],
          },
          {
            path: ':id',
            component: VrInfoComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
