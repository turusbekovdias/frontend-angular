import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BranchListComponent } from '../app/main/branch/branch-list/branch-list.component'
import { BranchAddComponent } from '../app/main/branch/branch-add/branch-add.component';
import { NavigationComponent } from '../app/navigation/navigation.component';
import { CustomerAddComponent } from '../app/main/customer/customer-add/customer-add.component';
import { CustomerListComponent } from '../app/main/customer/customer-list/customer-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    BranchListComponent,
    BranchAddComponent,
    NavigationComponent,
    CustomerAddComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
