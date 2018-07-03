/**
 * Created by: Ashwini Agre
 * Date: 03/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'getemployeedetails',
	templateUrl: 'getemployeedetails.component.html'
})
export class GetemployeedetailsComponent implements OnInit
{
	getemployeedetailsModel:GetemployeedetailsModel;
	_rootpane:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.getemployeedetailsModel=new GetemployeedetailsModel();
	}
	ngOnInit()
	{
		this.onLoad_rootpane();
	}
	
	click_rootpane(){ 
	} 
	click_chk(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/emp/findbyid'+'/'+this.getemployeedetailsModel.empId).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.chkBindResponse_1(response);
		});
	}
	chkBindResponse_1(response: any)
	{
		this.getemployeedetailsModel.firstName=response.firstName;
		this.getemployeedetailsModel.lastName=response.lastName;
		this.getemployeedetailsModel.age=response.age;
		this.getemployeedetailsModel.email=response.email;
		
	} 
	
	
}

export class GetemployeedetailsModel
{
	 empId: string; 
	 chk: string; 
	 firstName: string; 
	 lastName: string; 
	 age: number; 
	 email: string; 
}
