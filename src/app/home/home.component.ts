import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'homeqq',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;	
  constructor(private _router : Router){
    
 this.menuData=[{"text":"Core","expand":true,"children":[{"text":"GetEmployeeDetails","routerLink":"core/getemployeedetails","selected":false},{"text":"FormUi","routerLink":"core/formui","selected":false},{"text":"Testui","routerLink":"core/testui","selected":false},{"text":"Tabtest","routerLink":"core/tabtest","selected":false},{"text":"Testnav","routerLink":"core/testnav","selected":false}]}];   }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
