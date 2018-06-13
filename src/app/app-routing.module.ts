import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: '**', redirectTo: 'profile'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
