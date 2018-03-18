import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const appRoutes: Routes = [
	{
		path: 'login', component: LoginComponent
	},
	{
		path: 'schedule/:id', component: ScheduleComponent, children:[
		{
			path:'add_entry', component: AddEntryComponent
		},
		{
			path: 'edit_entry', component: EditEntryComponent
		},
		{
			path: 'edit_schedule', component: EditScheduleComponent
		},
		{
			path: 'dogs', component: DogsComponent
		},
		{
			path: 'dogs/edit', component: EditDogComponent
		}
		] 
	},
	{
		path: 'add_schedule', component: CreateScheduleComponent
	}
];



@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {


} 