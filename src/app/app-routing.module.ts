import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchListComponent } from './main/branch/branch-list/branch-list.component';
import { BranchAddComponent } from './main/branch/branch-add/branch-add.component';
import { CustomerListComponent } from './main/customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './main/customer/customer-add/customer-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'branch-list', pathMatch: 'full' },
  { path: 'branch-list', component: BranchListComponent},
  { path: 'branch-add', component: BranchAddComponent},
  { path: 'customer-list', component: CustomerListComponent},
  { path: 'customer-add', component: CustomerAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
