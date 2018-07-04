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
	selector: 'tabtest',
	templateUrl: 'tabtest.component.html'
})
export class TabtestComponent implements OnInit
{
	tabtestModel:TabtestModel;
	_rootpane:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.tabtestModel=new TabtestModel();
	}
	ngOnInit()
	{
		this.onLoad_rootpane();
	}
	
	click_rootpane(){ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/emp/findbyid'+'/'+).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.rootpaneBindResponse_1(response);
		});
	}
	rootpaneBindResponse_1(response: any)
	{
		
		
	} 
	
	
}

export class TabtestModel
{
	 testtext: string; 
}
