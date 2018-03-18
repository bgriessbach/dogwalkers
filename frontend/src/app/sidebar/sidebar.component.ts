import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	schedules: any[] = [{
			id: "SWEE",
			name: "Godards",
			description:"South West Essex Branch Branch in Chingford"
		},
		{
			id: "Dana",
			name: "Danahar",
			description:"Big RSPCA center in the country-side"

		},
		{
			id: "FAB",
			name: "Bullbreed Rescue",
			description:"Frances Adores Bullbreeds Home Rescue"
		}];

  constructor() { }

  ngOnInit() {
  }

}
