/**
 * Created by: Ashwini Agre
 * Date: 04/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'testui',
	templateUrl: 'testui.component.html'
})
export class TestuiComponent implements OnInit
{
	testuiModel:TestuiModel;
	radiogroupData:any;
	stateId_Data:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testuiModel=new TestuiModel();
	this.radiogroupData={"data":[{"gender":"female","genderId":"1"},{"gender":"male","genderId":"2"}]};
		this.stateId_Data=[];
	}
	ngOnInit()
	{
	}
	
	click_email(eventData:any)
	{ 
	} 
	click_countryId(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid'+'/'+this.testuiModel.id).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.countryIdBindResponse_1(response);
		});
	}
	countryIdBindResponse_1(response: any)
	{
		this.stateId_Data=response.response;
		
	} 
	click_saveBtn(eventData:any)
	{ 
		let response: any;
		const requestJson={
			id:this.testuiModel.id,
			firstName:this.testuiModel.firstName,
			lastName:this.testuiModel.lastName,
			genderId:this.testuiModel.genderId,
			age:this.testuiModel.age,
			phone:this.testuiModel.phone,
			email:this.testuiModel.email,
			departmentId:this.testuiModel.departemntId,
			countryId:this.testuiModel.countryId,
			stateId:this.testuiModel.stateId
		 };
		this.http.post('https://uat.amexio.org:8991/rest-sample-app/api/emp/save',requestJson).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.saveBtnBindResponse_1(response);
		});
	}
	saveBtnBindResponse_1(response: any)
	{
		
		
	} 
	
	
}

export class TestuiModel
{
	 id: string; 
	 firstName: string; 
	 lastName: string; 
	 phone: string; 
	 age: number; 
	 genderId: string; 
	 departemntId: string; 
	 email: string; 
	 countryId: string; 
	 stateId: string; 
}
