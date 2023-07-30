import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { CustomerAccountsComponent } from './pages/customer-accounts/customer-accounts.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SideBarComponent } from './init/side-bar/side-bar.component';
import { CustomersByCityComponent } from './Dashboard/customers-by-city/customers-by-city.component';
import { HeatmapTransactionsComponent } from './Dashboard/heatmap-transactions/heatmap-transactions.component';
import { MainComponent } from './Dashboard/main/main.component';
import { MobileappVsWebsiteComponent } from './Dashboard/mobileapp-vs-website/mobileapp-vs-website.component';
import { TopWidgetComponent } from './Dashboard/top-widget/top-widget.component';
import { TransactionPerAgeComponent } from './Dashboard/transaction-per-age/transaction-per-age.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    CustomerAccountsComponent,
    CustomersComponent,
    EditCustomerComponent,
    NewCustomerComponent,
    SideBarComponent,
    CustomersByCityComponent,
    HeatmapTransactionsComponent,
    MainComponent,
    MobileappVsWebsiteComponent,
    TopWidgetComponent,
    TransactionPerAgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    FontAwesomeModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
