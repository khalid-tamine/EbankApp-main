import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { CustomerAccountsComponent } from './pages/customer-accounts/customer-accounts.component';
import { MainComponent } from './Dashboard/main/main.component';

const routes: Routes = [
  { path: "dashboard", component: MainComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full"},
  { path: "customers", component: CustomersComponent },
  { path: "accounts", component: AccountsComponent },
  { path: "new-customer", component: NewCustomerComponent },
  { path: "edit-customer/:id", component: EditCustomerComponent },
  { path: "customer-accounts/:id", component: CustomerAccountsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
