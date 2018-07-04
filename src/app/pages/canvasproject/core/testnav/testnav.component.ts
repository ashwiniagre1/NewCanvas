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
	selector: 'testnav',
	templateUrl: 'testnav.component.html'
})
export class TestnavComponent implements OnInit
{
	testnavModel:TestnavModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testnavModel=new TestnavModel();
	}
	ngOnInit()
	{
	}
	
	click_newBtn(eventData:any)
	{ 
		this.router.navigate(['core/testui']);
		
	} 
	
	
}

export class TestnavModel
{
}
