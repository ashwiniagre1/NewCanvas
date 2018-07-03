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
	selector: 'formui',
	templateUrl: 'formui.component.html'
})
export class FormuiComponent implements OnInit
{
	formuiModel:FormuiModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.formuiModel=new FormuiModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class FormuiModel
{
}
