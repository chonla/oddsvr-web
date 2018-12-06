import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule, MatHeaderRowDef, MatHeaderCellDef } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatNativeDateModule, MatListModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { CookieService } from 'ngx-cookie-service';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VrListComponent } from './components/vr-list/vr-list.component';
import { NewVrComponent } from './components/new-vr/new-vr.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VrInfoComponent } from './components/vr-info/vr-info.component';
import { SignoutComponent } from './components/signout/signout.component';
import { JoinVrComponent } from './components/join-vr/join-vr.component';
import { FriendlyDatePipe } from './pipes/friendly-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    SidebarComponent,
    VrListComponent,
    NewVrComponent,
    VrInfoComponent,
    SignoutComponent,
    JoinVrComponent,
    FriendlyDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [NewVrComponent, JoinVrComponent]
})
export class AppModule { }
