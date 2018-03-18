import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CreateScheduleComponent } from './schedule/create-schedule/create-schedule.component';
import { AddEntryComponent } from './schedule/add-entry/add-entry.component';
import { EditScheduleComponent } from './schedule/edit-schedule/edit-schedule.component';
import { EditDogComponent } from './dogs/edit-dog/edit-dog.component';
import { EditEntryComponent } from './schedule/edit-entry/edit-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    ScheduleComponent,
    LoginComponent,
    SidebarComponent,
    TopbarComponent,
    CreateScheduleComponent,
    AddEntryComponent,
    EditScheduleComponent,
    EditDogComponent,
    EditEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
