import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'PriceCard';
  
  priceCards = [
  {
		planName: "Free",
		planCost: "$0",
		period: "/month",
		userCount: {
			name: "Single User",
			isAvailable: true
		},
		storageSpace: {
			name: "5GB Storage",
			isAvailable: true
		},
		publicProjects: {
			name: "Unlimited Public Projects",
			isAvailable: true
		},
		communityAccess: {
			name: "Community Access",
			isAvailable: true
		},
		privateProjects: {
			name: "Unlimited Private Projects",
			isAvailable: false
		},
		phoneSupport: {
			name: "Dedicated Phone Support",
			isAvailable: false
		},
		subdomain: {
			name: "Free Subdomain",
			isAvailable: false
		},
		statusReport: {
			name: "Monthly Status Reports",
			isAvailable: false
		}
	},
	{
		planName: "Plus",
		planCost: "$9",
		period: "/month",
		userCount: {
			name: "5 Users",
			isAvailable: true
		},
		storageSpace: {
			name: "50GB Storage",
			isAvailable: true
		},
		publicProjects: {
			name: "Unlimited Public Projects",
			isAvailable: true
		},
		communityAccess: {
			name: "Community Access",
			isAvailable: true
		},
		privateProjects: {
			name: "Unlimited Private Projects",
			isAvailable: true
		},
		phoneSupport: {
			name: "Dedicated Phone Support",
			isAvailable: true
		},
		subdomain: {
			name: "Free Subdomain",
			isAvailable: true
		},
		statusReport: {
			name: "Monthly Status Reports",
			isAvailable: false
		}
	},
	{
		planName: "Pro",
		planCost: "$49",
		period: "/month",
		userCount: {
			name: "Unlimited Users",
			isAvailable: true
		},
		storageSpace: {
			name: "150GB Storage",
			isAvailable: true
		},
		publicProjects: {
			name: "Unlimited Public Projects",
			isAvailable: true
		},
		communityAccess: {
			name: "Community Access",
			isAvailable: true
		},
		privateProjects: {
			name: "Unlimited Private Projects",
			isAvailable: true
		},
		phoneSupport: {
			name: "Dedicated Phone Support",
			isAvailable: true
		},
		subdomain: {
			name: "Unlimited Free Subdomain",
			isAvailable: true
		},
		statusReport: {
			name: "Monthly Status Reports",
			isAvailable: true
		}
	}];

}