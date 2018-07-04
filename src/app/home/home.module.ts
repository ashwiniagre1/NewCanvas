/**
 * Created by Sagar Jadhav.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {TopNavBarComponent} from "../layout/topnavbar.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component:HomeComponent,
    children: [
          	{
     	path: 'core/getemployeedetails', loadChildren: './../pages/canvasproject/core/getemployeedetails/getemployeedetails.module#GetemployeedetailsModule'
     	},	
	     	{
     	path: 'core/formui', loadChildren: './../pages/canvasproject/core/formui/formui.module#FormuiModule'
     	},	
	     	{
     	path: 'core/testui', loadChildren: './../pages/canvasproject/core/testui/testui.module#TestuiModule'
     	},	
	     	{
     	path: 'core/tabtest', loadChildren: './../pages/canvasproject/core/tabtest/tabtest.module#TabtestModule'
     	},	
	     	{
     	path: 'core/testnav', loadChildren: './../pages/canvasproject/core/testnav/testnav.module#TestnavModule'
     	},	
	    ]
  }
];


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    TopNavBarComponent
  ]
})
export class HomeModule {
}